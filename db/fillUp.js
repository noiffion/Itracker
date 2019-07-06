// fillUp.js.js

const MongoClient = require('mongodb').MongoClient;


function fillDb(n) {

  const entries = new Array(n).fill({});

  const owners = ['Eric', 'Susan', 'Jamal', 'Liu', 'Ravan', 'Walda'];

  const startDate = () => {
    let month = Math.ceil(Math.random() * 12);
    let day;
  
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day = Math.ceil(Math.random() * 31);
        break;
      case 2:
        day = Math.ceil(Math.random() * 28);
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        day = Math.ceil(Math.random() * 30);
        break;
      
      default:
        break;
    }
  
    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    let date = `2019-${month}-${day}`;
    date = new Date(date);
  
    return date.toISOString();
  }

  // in a scale of 1-10 
  const effortFunc = () => Math.ceil(Math.random() * 10);

  const endDate = (creationDate, effort, state) => {

    let beginDate = new Date(creationDate);
    // const mSecsPerDay = 86400000  // 24hour*60min*60sec*1000msec -> 86,400,000
    beginDate = beginDate.valueOf();  // in millisecs since 1970-01-01
    const minWorkHours = Math.pow(effort, 3);
    const maxWorkHours = Math.pow(effort+1, 3) - 1;
    const workHours = Math.max(minWorkHours, (Math.floor(Math.random() * maxWorkHours)));
    const workMilliSecs = workHours * 3600 * 1000;
    // const workDays = Math.floor(workMilliSecs / mSecsPerDay);
    const now = Date.now();
  
    let finishDate = new Date();
    finishDate = finishDate.setTime(beginDate + workMilliSecs);
    finishDate = finishDate > now ? undefined : finishDate;
    if (finishDate) {
      finishDate = new Date(finishDate);// convert millisecs to normal date
      finishDate = finishDate.toISOString();
    }

    return finishDate;
  };

  const descriptions = [
    'Fixing React Router',
    'Critical security failure',
    'Missing link',
    'Updating to Bootstrap 4',
    'Error in console when clicking Add',
    'Missing favicon',
    'Catastrophic crash during initial pageload',
    'Disaster. The horror, the horror',
    'Minor, trivial, sweet nothing: my cat could fix it',
    'Something to do with IE',
    'Again, IE is to blame: Damn you, Explorer!',
    'Something does not work. It simply doesn\'t',
    'Spelling error in the code',
    'My dog ate my commit yesterday: have to rewrite',
    'Aliens took over: Hail to the conquerors!',
    'Russians infiltrated the page to help elect Godzilla',
    'Spectre & Meltdown somehow affected the page',
    'The internets is totally broken: Need fixin ASAP!!!',
    'HR situation: The coffee machine broke down',
    'Irresistable force has met immovable object',
  ];


  function entryCreator() {

    const entry = {};
    // state, owner, creation, effort, completion, description 
    entry.owner = owners[Math.floor(Math.random() * owners.length)];
    entry.creation = startDate();
    entry.effort = effortFunc();
    entry.completion = endDate(entry.creation, entry.effort, entry.state);
    if (entry.completion) {
        const doneStates = ['Fixed', 'Closed'];
        entry.state = doneStates[Math.floor(Math.random() * doneStates.length)];
    } else {
        const mSecsPerDay = 86400000;
        const begin = entry.creation.valueOf();
        const now = Date.now();
        if (now - begin < mSecsPerDay * 7) {
            const newStates = ['New', 'Assigned'];
            entry.state = newStates[Math.floor(Math.random() * newStates.length)];
        } else {
            const openStates = ['Open', 'Verified'];
            entry.state = openStates[Math.floor(Math.random() * openStates.length)];
        }
    }
    entry.description = descriptions[Math.floor(Math.random() * descriptions.length)]
  
    return entry;
  }

  entries.forEach((entry, i, arr) => arr[i] = entryCreator());

  return entries;
}


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
.then((client) => { 

  const numberOfEntries = 20;
  const entries = fillDb(numberOfEntries);

  const dBase = client.db('Itracker');
  const coll = dBase.collection('issues');

  coll.deleteMany({})
  .then(() => coll.insertMany(entries))
  .then(() => client.close())
  .catch(err => console.log(err));

})
.catch(error => console.log(error));
