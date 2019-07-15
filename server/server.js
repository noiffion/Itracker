// server.j

const express                   = require('express');
const session                   = require('express-session');
const bodyParser                = require('body-parser');
const cors                      = require('cors');
const path                      = require('path');
const dotenv                    = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const fetch                     = require('node-fetch');
const MongoDBStore              = require('connect-mongodb-session')(session);
const passport                  = require('passport');
const GitHubStrategy            = require('passport-github2').Strategy;
const Issue                     = require('./issue.js');


const toQuery = (params, delimiter='&') => {
  const keys = Object.keys(params);
  return keys.reduce((str, key, index) => {
    let query = `${str}${key}=${params[key]}`;
    if (index < (keys.length - 1)) query += delimiter;
    return query;
  }, '');
}

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

const result = dotenv.config();
if (result.error) throw result.error;

let issueTracker;
let unique;

// mongodb-session
const connection = process.env.DB;
const sessionStore = new MongoDBStore(
  {
    uri: connection,
    databaseName: 'Itracker',
    collection: 'sessions'
  },
);

sessionStore.on('error', error => console.log(error));

app.use(session(
  {
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: sessionStore,
    resave: true,
    saveUninitialized: true
  })
);

passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ githubId: profile.id }, (err, user) => cb(err, user));
  }
));

app.use(passport.initialize());
app.use(passport.session());


app.get('login', passport.authenticate('github'));

app.get('auth/github/callback', 
        passport.authenticate('github', { failureRedirect: '/login' }),
        (req, res) => res.redirect('/')
);


/*
app.get('/login', (req, res) => {

  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_~-!';
  unique = chars.split('').map(c => chars[Math.floor(Math.random() * chars.length)]).join('');
  const params = {
    client_id: process.env.GH_ID,
    redirect_uri: 'http://localhost:3000/github/callback',
    scope: 'user:email',
    state: unique,
  }
  const paramQuery = toQuery(params);
  res.redirect(`https://github.com/login/oauth/authorize?${paramQuery}`)
});


app.get('/github/callback', (req, res) => {
  const { code, state } = req.query;
  if (state !== unique) {
    return res.redirect('https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)');
  }

  const params = {
    grant_type: 'authorization_code',
    client_id: process.env.GH_ID,
    client_secret: process.env.GH_SECRET,
    code: code,
    state: unique,    
  };
  const paramQuery = toQuery(params);

  const post = {
    method: 'POST',
    headers: { 
      'content-type': 'application/json',
      'accept': 'application/json',
    },
  };

  fetch(`https://github.com/login/oauth/access_token?${paramQuery}`, post)
  .then(resp => { 
    if (resp) { 
        console.log(resp);
        console.log(resp.headers);
        res.redirect('/');
    } else {
        throw new Error('Unauthorized access!');   
    }
  })
  .catch(err => { 
    console.log(err)
    res.redirect('/');
  });

});
*/

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



MongoClient.connect(connection, { useNewUrlParser: true })
.then((client) => {
  issueTracker = client.db('Itracker');
  app.listen(3000, () => console.log('App started on port 3000'))
})
.catch(error => console.log('ERROR:', error));
