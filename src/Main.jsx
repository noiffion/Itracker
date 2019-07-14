// Main.jsx

import 'whatwg-fetch';
import React, { Fragment } from 'react';
import ReactDOM            from 'react-dom';
import PropTypes           from 'prop-types';
import Table               from 'react-bootstrap/Table';
import Button              from 'react-bootstrap/Button';
import OffCanvasBody       from './OffCanvasBody.jsx';
import OffCanvasMenu       from './OffCanvasMenu.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      filterOn: false,
      actualPage: 0,
      maxPageNum: 0,
      iPerPage: 20,
      alertShow: false,
      alertMsg: ' ',
      normalMsg: true,
    };

    this.canvasToggle = this.canvasToggle.bind(this);
          
    this.setAlert = this.setAlert.bind(this);
    
    this.pageGo = this.pageGo.bind(this);

    this.refreshPage = this.refreshPage.bind(this);
    this.iFilter = this.iFilter.bind(this);

    this.selectAll = this.selectAll.bind(this);
    this.selectDelAll = this.selectDelAll.bind(this);
    this.unSelectDelAll = this.unSelectDelAll.bind(this);
    this.cancelAll = this.cancelAll.bind(this);

    this.selectSingleRow = this.selectSingleRow.bind(this);
    this.deleteSingleRow = this.deleteSingleRow.bind(this);
    this.cancelSingleRow = this.cancelSingleRow.bind(this);

    this.deleteIssues = this.deleteIssues.bind(this);
    this.updateIssues = this.updateIssues.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }
 
  canvasToggle() {
    this.setState({ filterOn: !this.state.filterOn });
  }

  setAlert(msg, normal=true, show=true) {
    this.setState({ 
      alertMsg: msg,
      normalMsg: normal,
      alertShow: show, 
    })
  }

  loadData() {
    fetch(`/api/issues`)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // console.log('Total count of records:', data._metadata.total_count);
          data.records.forEach((issue) => {
            if (issue.completion) issue.completion = new Date(issue.completion);
            issue.creation = new Date(issue.creation);
            issue.onScreen = false;
            issue.selected = '';
            issue.filters = {
              state: true,
              owner: true,
              creation: true,
              effort: true,
              description: true,
            };
            issue.filteredIn = true;
          });
          this.setState({ 
            issues: data.records,
            maxPageNum: Math.ceil(data.records.length / this.state.iPerPage),
          });
        });
      } else {
        response.json().then((error) => {
          setAlert(`Failed to fetch issues: ${error.message}`, false);
        });
      }
    })
    .catch((err) => {
      setAlert(`Error in fetching data from server: ${err}`, false);
    });
  }

  refreshPage() {
    this.loadData();
  }

  pageGo(pageNum) {
    this.setState({ actualPage: pageNum })
  }

  iFilter(filter) {
    const issues = this.state.issues;
    const types = Object.keys(filter);
    let count = -1;

    issues.forEach(issue => {
      types.forEach(type => {
        if (filter[type] === 'All') {
            issue.filters[type] = true;
        } else if (type === 'state') {
            if (issue[type] !== filter[type]) {
                issue.filters[type] = false;
            } else {
                issue.filters[type] = true;
            }
        } else if (type === 'owner' || type === 'description') {
            if (!issue[type].toLowerCase().includes(filter[type])) {
                issue.filters[type] = false;
            } else {
                issue.filters[type] = true;
            }
        } else if (type === 'effort') {
            if (issue[type] < filter[type][0] || issue[type] > filter[type][1]) {
                issue.filters[type] = false;
            } else {
                issue.filters[type] = true;
            }
        } else if (type === 'creation') {
            const issueDate = issue[type].valueOf();
            const from = filter[type][0].valueOf();
            const until = filter[type][1].valueOf();
            if (issueDate < from || issueDate > until) {
                issue.filters[type] = false;
            } else {
                issue.filters[type] = true;
            }
        }
      });
      issue.filteredIn = Object.values(issue.filters).every(filter => filter);
      if (issue.filteredIn) count++;
    });

    this.setState({
      issues: issues,
      maxPageNum: (Math.ceil(count / this.state.iPerPage) || 1),
      actualPage: 0,
    });
  }

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


  deleteIssues(issues) {
    const setAlert = this.setAlert;
    const rowsToDelete = []
    issues.forEach(issue => { if (issue.selected === 'delete') rowsToDelete.push(issue._id) });

    if (rowsToDelete.length === 1) {
        const id = rowsToDelete[0];

        fetch(`/api/issues/${id}`, {method: 'DELETE'})
        .then(response => {
          const success = `Successfully deleted the issue`;
          const failure = `Failed to delete the issue!`;
          response.ok ? setAlert(success) : setAlert(failure);
        })
        .catch(error => console.log(error))
    } else if (rowsToDelete.length > 1) {
        const delParams = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(rowsToDelete),
        }

        fetch(`/api/issues/deleteMany`, delParams) 
        .then(response => {
          const success = `Successfully deleted the issues`;
          const failure = `Failed to delete the issues`;
          response.ok ? setAlert(success) : setAlert(failure);
        })
        .catch(error => console.log(error))
    }
  }


  updateIssues(issues) {
    const setAlert = this.setAlert;
    const rowsToUpdate = issues.filter(issue => issue.selected === 'edit');
    const issueNumber = rowsToUpdate.length;
    let currentIssue = 0;
    const respOKs = [];

    const feedbackAlert = (current) => {
      if (current === issueNumber) {
        const allRight = respOKs.every(resp => resp);
        const plural = issueNumber > 1 ? 's' : '';
        const success = `Successfully updated the issue${plural}.`;
        const failure = `Failed to update the issue${plural}!`;
        allRight ? setAlert(success) : setAlert(failure);
      } 
    }

    rowsToUpdate.forEach((row) => {
      const issue = {}; 
      const properties = ['state', 'owner', 'creation', 'effort', 'completion', 'description'];

      properties.forEach((property) => {
        const input = document.forms.tableForm[`${row._id+property}`];
        input.value ? issue[property] = input.value : issue[property] = input.placeholder;
        if (property === 'creation' || property === 'completion') {
          if (issue[property]) {
            let date;
            date = Date.parse(issue[property]);
            date = new Date(date);
            if (date.toString() === 'Invalid Date') {
              const dateErr = new Error(`${row._id.substr(-4)}: Invalid ${property} date!`);
              setAlert(`${dateErr.message}`, false);
              throw dateErr;
            }
            if (property === 'completion' && date < new Date(issue.creation)) {
              const seqErr = new Error(`Completion should be later than creation!`)
              setAlert(`${seqErr.message}`, false);
              throw seqErr;             
            }
            issue[property] = date.toISOString();
          }
        }
      });

      const putParams = { 
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(issue),  
      }

      fetch(`/api/issues/${row._id}`, putParams)
      .then(response => {
        currentIssue++;
        respOKs.push(response.ok ? true : false);
        feedbackAlert(currentIssue);
      })  
      .catch(error => {
        currentIssue++;
        respOKs.push(false);
        setAlert(`Error in sending data to server: ${error.message}`, false);
      });
    }); 
  }


  submitChanges(event) {
    const issues = this.state.issues;

    this.deleteIssues(issues);
    this.updateIssues(issues);
    this.refreshPage();
  }

  render() {
    return (
      <React.Fragment>
        <OffCanvasBody
          width={160}
          transitionDuration={200}
          position={"left"}
          effect={"push"}
          isMenuOpened={this.state.filterOn}
          refreshPage={this.refreshPage} 
          canvasToggle={this.canvasToggle} 
          iFilter={this.iFilter}
          pageGo={this.pageGo}
          setAlert={this.setAlert}
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
          isMenuOpened={this.state.filterOn}
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
