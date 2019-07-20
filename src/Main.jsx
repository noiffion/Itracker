// Main.jsx

import 'whatwg-fetch';
import React         from 'react';
import ReactDOM      from 'react-dom';
import OffCanvasBody from './OffCanvasBody.jsx';
import OffCanvasMenu from './OffCanvasMenu.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: {
        loggedIn : false,
        username: null,
        avatar: null,
      },
      issues: [],
      filter: {
        issueState: 'All',
        owner: '',
        from: 'All',
        until: 'All',
        effortGte: 1,
        effortLte: 10,
        description: '',
      },
      filterBar: false,
      actualPage: 0,
      maxPageNum: 0,
      iPerPage: 20,
      alertShow: false,
      alertMsg: ' ',
      normalMsg: true,
    };

    this.canvasToggle = this.canvasToggle.bind(this);

    this.displayAlert = this.displayAlert.bind(this);

    this.pageGo = this.pageGo.bind(this);

    this.issuesFillWith = this.issuesFillWith.bind(this);
    this.refreshPage = this.refreshPage.bind(this);

    this.inOut = this.inOut.bind(this);
    this.iFilter = this.iFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);

    this.selectAll = this.selectAll.bind(this);
    this.selectDelAll = this.selectDelAll.bind(this);
    this.unSelectDelAll = this.unSelectDelAll.bind(this);
    this.cancelAll = this.cancelAll.bind(this);

    this.selectSingleRow = this.selectSingleRow.bind(this);
    this.deleteSingleRow = this.deleteSingleRow.bind(this);
    this.cancelSingleRow = this.cancelSingleRow.bind(this);

    this.singleRowDel = this.singleRowDel.bind(this);
    this.multiRowDel = this.multiRowDel.bind(this);
    this.deleteIssues = this.deleteIssues.bind(this);

    this.feedbackAlert = this.feedbackAlert.bind(this);
    this.propertyUpdate = this.propertyUpdate.bind(this);
    this.updateFetch = this.updateFetch.bind(this);
    this.updateIssues = this.updateIssues.bind(this);

    this.submitChanges = this.submitChanges.bind(this);
  }


  componentDidMount() {
    this.refreshPage();
  }
 
  canvasToggle() {
    this.setState({ filterBar: !this.state.filterBar });
  }

  displayAlert(msg, normal=true, show=true) {
    this.setState({ 
      alertMsg: msg,
      normalMsg: normal,
      alertShow: show, 
    })
  }

  pageGo(pageNum) {
    this.setState({ actualPage: pageNum })
  }


/* ---------------------------------------------------------------------------------------------- */
/*                                                                                 Fetch from DB */

  issuesFillWith(data) {
    data.records.forEach((issue) => {
      if (issue.completion) issue.completion = new Date(issue.completion);
      issue.creation = new Date(issue.creation);
      issue.onScreen = false;
      issue.selected = '';
      issue.filters = {
        issueState: true, owner: true, from: true, until: true, 
        effortGte: true, effortLte: true, description: true,
      };
      issue.filteredIn = true;
    });
    const filter = {
      issueState: 'All', owner: '', from: 'All', until: 'All', 
      effortGte: 1, effortLte: 10, description: '',
    }
    const signIn = {
      loggedIn: data.metadata.auth,
      username: data.metadata.username,
      avatar: data.metadata.avatar,  
    }
    this.setState({
      signIn: signIn,  
      issues: data.records,
      filter: filter,  
      maxPageNum: Math.ceil(data.records.length / this.state.iPerPage),
    });
  }

  refreshPage() {
    fetch(`/api/issues`)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // console.log('Total count of records:', data._metadata.total_count);
          this.issuesFillWith(data);
        });
      } else {
        response.json().then((error) => {
          this.displayAlert(`Failed to fetch issues`, false);
          console.log(error);
        });
      }
    })
    .catch((error) => {
      this.displayAlert(`Error in fetching data from server`, false);
      console.log(error);
    });
  }


/* ---------------------------------------------------------------------------------------------- */
/*                                                                                     Filtering */

  clearFilter() {
   const issues = this.state.issues
   issues.forEach(issue => {
     Object.keys(issue.filters).forEach(filter => issue.filters[filter] = true);
     issue.filteredIn = true;
   });

   const filter = {
     issueState: 'All', owner: '', from: 'All', until: 'All',
     effortGte: 1, effortLte: 10, description: '',
   }

   this.setState({
     issues: issues,
     filter: filter, 
     maxPageNum: (Math.ceil(issues.length / this.state.iPerPage) || 1),
     actualPage: 0,
   })
  }

  inOut(issue, filter, tValue, type, filtIn) {
    switch(type) {
      case 'issueState':
        filtIn = (tValue === 'All' || issue.issueState === tValue); 
        filter[type] = tValue; break;
      case 'owner':
        filtIn = (tValue === '' || issue.owner.toLowerCase().includes(tValue.toLowerCase()));
        filter[type] = tValue; break;
      case 'from':
        filtIn = (tValue === 'All' || new Date(tValue) <= issue.creation);
        filter[type] = tValue; break;
      case 'until':
        filtIn = (tValue === 'All' || new Date(tValue) >= issue.creation);
        filter[type] = tValue; break;
      case 'effortGte':
        filtIn = (tValue <= issue.effort);
        filter[type] = tValue; break;
      case 'effortLte':
        filtIn = (tValue >= issue.effort);
        filter[type] = tValue; break;
      case 'description':
        filtIn = (tValue === '' || issue.description.toLowerCase().includes(tValue.toLowerCase()));
        filter[type] = tValue; break;
    }
    return filtIn;
  }
 
    
  iFilter(event, type) {
    if (type === 'clearFilter') {
      this.clearFilter();
      return;
    }

    const filter = this.state.filter;
    const tValue = event.target.value;
    const issues = this.state.issues;
    let count = -1;

    issues.forEach(issue => {
      let filtIn;
      filtIn = this.inOut(issue, filter, tValue, type, filtIn);
      issue.filters[type] = filtIn;
      issue.filteredIn = Object.values(issue.filters).every(filtIn => filtIn);
      if (issue.filteredIn) count++; 
    });

    this.setState({
      issues: issues,
      filter: filter,
      maxPageNum: (Math.ceil(count / this.state.iPerPage) || 1),
      actualPage: 0,
    });
  }


/* ---------------------------------------------------------------------------------------------- */
/*                                                                                     Selection */

  selectAll() {
    const issues = this.state.issues;
    issues.forEach(issue => { 
      if (issue.filteredIn && issue.onScreen) return issue.selected = 'edit'; 
    });
    this.setState({ issues: issues });
  }

  selectDelAll() {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue.selected === 'edit') return issue.selected = 'delete'; });
    this.setState({ issues: issues });
  }

  unSelectDelAll() {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue.selected === 'delete') return issue.selected = 'edit'; });
    this.setState({ issues: issues });
  }

  cancelAll() {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue.selected) return issue.selected = '' });
    this.setState({ issues: issues });
  }

  selectSingleRow(id) {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue._id === id) return issue.selected = 'edit'; });
    this.setState({ issues: issues });
  }

  deleteSingleRow(id) {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue._id === id) return issue.selected = 'delete'; });
    this.setState({ issues: issues });
  }

  cancelSingleRow(id) {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue._id === id) return issue.selected = ''; });
    this.setState({ issues: issues });
  }


/* ---------------------------------------------------------------------------------------------- */
/*                                                                                      Deleting */

  singleRowDel(id, displayAlert) {
    fetch(`/api/issues/${id}`, {method: 'DELETE'})
    .then(response => {
      const success = `Successfully deleted the issue`;
      const failure = `Failed to delete the issue!`;
      response.ok ? displayAlert(success) : displayAlert(failure);
    })
    .catch(error => console.log(error)) 
  }

  multiRowDel(rowsToDelete, displayAlert) {
    const delParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rowsToDelete),
    }
    fetch(`/api/issues/deleteMany`, delParams) 
    .then(response => {
      const success = `Successfully deleted the issues`;
      const failure = `Failed to delete the issues`;
      response.ok ? displayAlert(success) : displayAlert(failure);
    })
    .catch(error => console.log(error))   
  }

  deleteIssues(issues) {
    const displayAlert = this.displayAlert;
    const rowsToDelete = []
    issues.forEach(issue => { if (issue.selected === 'delete') rowsToDelete.push(issue._id) });

    if (rowsToDelete.length === 1) {
        this.singleRowDel(rowsToDelete[0], displayAlert);
    } else if (rowsToDelete.length > 1) {
        this.multiRowDel(rowsToDelete, displayAlert);
    }
  }


/* ---------------------------------------------------------------------------------------------- */
/*                                                                                      Updating */

  feedbackAlert(respOKs, issueNumber, displayAlert) {
    if (respOKs.length === issueNumber) {
      const allRight = respOKs.every(resp => resp);
      const plural = issueNumber > 1 ? 's' : '';
      const success = `Successfully updated the issue${plural}.`;
      const failure = `Failed to update the issue${plural}!`;
      allRight ? displayAlert(success) : displayAlert(failure);
    }
  }

  propertyUpdate(row, issue, property, displayAlert) {
    const input = document.forms.tableForm[`${row._id+property}`];
    input.value ? (issue[property] = input.value) : (issue[property] = input.placeholder);
    if (property === 'creation' || property === 'completion') {
      if (issue[property]) {
        let date;
        date = Date.parse(issue[property]);
        date = new Date(date);
        if (date.toString() === 'Invalid Date') {
          const dateErr = new Error(`${row._id.substr(-4)}: Invalid ${property} date!`);
          displayAlert(`${dateErr.message}`, false);
          throw dateErr;
        }
        if (property === 'completion' && date < new Date(issue.creation)) {
          const seqErr = new Error(`Completion should be later than creation!`)
          displayAlert(`${seqErr.message}`, false);
          throw seqErr;
        }
        issue[property] = date.toISOString();
      }
    }
  }

  updateFetch(row, issue, respOKs, issueNumber, displayAlert) {
    // console.log(issue);
    const putParams = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue),
    }

    fetch(`/api/issues/${row._id}`, putParams)
    .then(response => {
      respOKs.push(response.ok ? true : false);
      this.feedbackAlert(respOKs, issueNumber, displayAlert);
    })
    .catch(error => {
      console.log(error);  
      respOKs.push(false);
      displayAlert(`Error in sending data to server`, false);
    });   
  }

  updateIssues(issues) {
    const displayAlert = this.displayAlert;
    const rowsToUpdate = issues.filter(issue => issue.selected === 'edit');
    const issueNumber = rowsToUpdate.length;
    const respOKs = [];

    rowsToUpdate.forEach((row) => {
      const issue = {};
      const properties = ['issueState', 'owner', 'creation', 'effort', 'completion', 'description'];

      properties.forEach((property) => {
        this.propertyUpdate(row, issue, property, displayAlert);
      });

      this.updateFetch(row, issue, respOKs, issueNumber, displayAlert);
    });
  }


/* ---------------------------------------------------------------------------------------------- */
/*                                                                                    Submitting */

  submitChanges(event) {
    const issues = this.state.issues;
    this.deleteIssues(issues);
    this.updateIssues(issues);
    this.refreshPage();
  }


/* ---------------------------------------------------------------------------------------------- */
/*                                                                                           JSX */

  render() {

    // console.log(this.state.signIn);
    return (
      <React.Fragment>
        <OffCanvasBody
          width={160}
          transitionDuration={200}
          position={"left"}
          effect={"push"}
          signIn={this.state.signIn}
          filterBar={this.state.filterBar}
          refreshPage={this.refreshPage} 
          canvasToggle={this.canvasToggle} 
          iFilter={this.iFilter}
          pageGo={this.pageGo}
          displayAlert={this.displayAlert}
          actualPage={this.state.actualPage} 
          maxPageNum={this.state.maxPageNum}
          alertMsg={this.state.alertMsg}
          alertShow={this.state.alertShow}
          normalMsg={this.state.normalMsg}
          issues={this.state.issues}
          iPerPage={this.state.iPerPage}
          submitChanges={this.submitChanges}
          selectSingleRow={this.selectSingleRow}
          cancelSingleRow={this.cancelSingleRow}
          deleteSingleRow={this.deleteSingleRow}
          selectAll={this.selectAll}
          selectDelAll={this.selectDelAll}
          unSelectDelAll={this.unSelectDelAll}
          cancelAll={this.cancelAll}
        >
        </OffCanvasBody>
        <OffCanvasMenu
          width={160}
          transitionDuration={200}
          position={"left"}
          effect={"push"}
          filter={this.state.filter}
          filterBar={this.state.filterBar}
          iFilter={this.iFilter}
          canvasToggle={this.canvasToggle}
        >
        </OffCanvasMenu>
      </React.Fragment>
    );
  }
}


const mainNode = document.getElementById('main');
ReactDOM.render(<Main />, mainNode);


if (module.hot) module.hot.accept();
