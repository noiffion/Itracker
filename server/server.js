// server.j

const express                   = require('express');
const bodyParser                = require('body-parser');
const path                      = require('path');
const dotenv                    = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const Issue                     = require('./issue.js');


const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

const result = dotenv.config();
if (result.error) throw result.error;

let issueTracker;

app.get('/api/issues', (req, res) => {
  const filter = {};
  if (req.query.sts) filter.state = req.query.sts;
  if (req.query.owner) filter.owner = req.query.owner;
  if (req.query.effort_lte || req.query.effort_gte) filter.effort = {};
  if (req.query.effort_lte) filter.effort.$lte = parseInt(req.query.effort_lte, 10);
  if (req.query.effort_gte) filter.effort.$gte = parseInt(req.query.effort_gte, 10);

  issueTracker.collection('issues').find(filter).toArray()
  .then((issues) => {
    const metadata = { total_count: issues.length };
    res.json({ _metadata: metadata, records: issues })})
  .catch((error) => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});


app.delete('/api/issues/:id', (req, res) => {
  let issueId;
  try {
      issueId = new ObjectId(req.params.id);
  } catch (error) {
      res.status(422).json({ message: `Invalid issue ID format: ${error}` });
      return;
  }


  issueTracker.collection('issues').deleteOne({_id: issueId})
  .then((feedback) => {
   const ok = { status: 'OK'};
   const notOk = { status: 'Warning: objects not found'};
   feedback.deletedCount === 1 ?  res.json(ok) : res.json(notOk);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` })
  });
});


app.post('/api/issues', (req, res) => {
  const newIssue = req.body;

  const err = Issue.validateIssue(newIssue);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  issueTracker.collection('issues').insertOne(Issue.cleanupIssue(newIssue))
  .then(result => issueTracker.collection('issues').findOne({ _id: result.insertedId }))
  .then(savedIssue => res.json(savedIssue))
  .catch((error) => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});


app.put('/api/issues/:id', (req, res) => {
  const issue = req.body;
  let issueID = req.params.id;

  try {
    issueID = new ObjectId(issueID);
  } catch (error) {
      res.status(422).json({ message: `Invalid issue ID format: ${error}` });
      return;
  }

  issueTracker.collection('issues').updateOne({_id: issueID}, 
    { $set: { 
        state: issue.state, 
        owner: issue.owner,
        effort: parseInt(issue.effort, 10), 
        creation: issue.creation,
        completion: issue.completion,
        description: issue.description
      }
    }
  )
  .then(feedback => {
    res.json(feedback);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});


app.post('/api/issues/deleteMany', (req, res) => {
  const issueIDs = [];

  try {
      req.body.forEach(id => issueIDs.push(new ObjectId(id)));
  } catch (error) {
      res.status(422).json({ message: `Invalid issue ID format: ${error}` });
      return;
  }

  issueTracker.collection('issues').deleteMany({_id: {$in: issueIDs}})
  .then((feedback) => {
   const issueNum = issueIDs.length;
   const ok = { status: 'OK'};
   const notOk = { status: 'Warning: objects not found'};
   feedback.deletedCount === issueNum ? res.json(ok) : res.json(notOk);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` })
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve('static/index.html'));
});



const connection = process.env.DB;
//MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
MongoClient.connect(connection, { useNewUrlParser: true })
.then((client) => {
  issueTracker = client.db('Itracker');
  app.listen(3000, () => console.log('App started on port 3000'))
})
.catch(error => console.log('ERROR:', error));
