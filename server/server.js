// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const Issue = require('./issue.js');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());
let issueTracker;


app.get('/api/issues', (req, res) => {
  const filter = {};
  if (req.query.sts) filter.state = req.query.sts;
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
  .then((deleteResult) => {
    if (deleteResult.result.n === 1) {
        res.json({ status: 'OK' });
    } else { 
        res.json({ status: 'Warning: object not found' });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` })});
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
  let issueId;
  try {
      issueId = new ObjectId(req.params.id);
  } catch (error) {
      res.status(422).json({ message: `Invalid issue ID format: ${error}` });
      return;
  }

  const issue = req.body;
  delete issue._id;

  const err = Issue.validateIssue(issue);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }
  const cIs = Issue.convertIssue(issue);
  issueTracker.collection('issues')
  .updateOne({_id: issueId}, 
    {$set: { 'state': cIs.state, 'owner': cIs.owner,
             'effort': parseInt(cIs.effort, 10), 'creation': cIs.creation,
             'completion': cIs.completion,
             'description': cIs.description}})
  .then(() => issueTracker.collection('issues').findOne({_id: issueId}))
  .then(savedIssue => res.json(savedIssue))
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve('static/index.html'));
});


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
.then((client) => {
  issueTracker = client.db('issuetracker');
  app.listen(3000, () => console.log('App started on port 3000'))
})
.catch(error => console.log('ERROR:', error));
