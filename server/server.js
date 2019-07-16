// server.js

const express                   = require('express');
const session                   = require('express-session');
const bodyParser                = require('body-parser');
const cors                      = require('cors');
const path                      = require('path');
const partials                  = require('express-partials');
const methodOverride            = require('method-override');
const dotenv                    = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const fetch                     = require('node-fetch');
const MongoDBStore              = require('connect-mongodb-session')(session);
const passport                  = require('passport');
const GitHubStrategy            = require('passport-github2').Strategy;
const Issue                     = require('./issue.js');


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login')
}

let Itracker;
const result = dotenv.config();
if (result.error) throw result.error;
const DB_CONNECTION  = process.env.DB;
const SESSION_SECRET = process.env.SESSION_SECRET;
const GH_ID          = process.env.GH_ID;
const GH_SECRET      = process.env.GH_SECRET;

const app = express();
const sessionStore = new MongoDBStore(
  {
    uri: DB_CONNECTION,
    databaseName: 'Itracker',
    collection: 'sessions'
  },
);
sessionStore.on('error', error => console.log(error));

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(
  {
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: sessionStore,
    resave: true,
    saveUninitialized: true
  })
);

app.use(partials());
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {    
  done(null, user);    
});    
    
passport.deserializeUser((user, done) => {    
  done(null, user);    
}); 

passport.use(new GitHubStrategy({
    clientID: GH_ID,
    clientSecret: GH_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
   console.log(accessToken, profile);
    console.log('Profile: ', profile, '\n');    
    Itracker.collection('users').findOne({ gh_ID: profile.id })
    .then(result => { 
      // console.log(result);
      if (!result) {
          Itracker.collection('users').insertOne(
            { 
              gh_ID: profile.id,
              fullName: profile.displayName,
              userName: profile.username,   
              profileUrl: profile.profileUrl,
              emails: profile.emails,
              avatar_url: profile._json.avatar_url
            }                                           
          )  
          .then(result => {
            // console.log(Object.keys(result));
            const insC = result.insertedCount;  
            const insId = result.insertedId;  
            console.log(`Successfully inserted: ${insC} (with id of ${insId})`);
          })
          .catch(error => console.log(error));
      }
      return done(null, profile);
    })
    .catch((error) => {
      console.log(error);
    }); 
  }     
));


app.get('/login', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => { 
    res.redirect('/');
  }
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


app.get('/api/issues', (req, res) => {
  const filter = {};
  if (req.query.sts) filter.state = req.query.sts;
  if (req.query.owner) filter.owner = req.query.owner;
  if (req.query.effort_lte || req.query.effort_gte) filter.effort = {};
  if (req.query.effort_lte) filter.effort.$lte = parseInt(req.query.effort_lte, 10);
  if (req.query.effort_gte) filter.effort.$gte = parseInt(req.query.effort_gte, 10);

  Itracker.collection('issues').find(filter).toArray()
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

  Itracker.collection('issues').deleteOne({_id: issueId})
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

  Itracker.collection('issues').insertOne(Issue.cleanupIssue(newIssue))
  .then(result => Itracker.collection('issues').findOne({ _id: result.insertedId }))
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

  Itracker.collection('issues').updateOne({_id: issueID}, 
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

  Itracker.collection('issues').deleteMany({_id: {$in: issueIDs}})
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
  console.log(req.user);
  res.sendFile(path.resolve('static/index.html'));
});



MongoClient.connect(DB_CONNECTION, { useNewUrlParser: true })
.then((client) => {
  Itracker = client.db('Itracker');
  app.listen(3000, () => console.log('App started on port 3000'))
})
.catch(error => console.log('ERROR:', error));
