// Main.jsx

import 'whatwg-fetch';
import 'babel-polyfill';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect,
        Link, withRouter } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { Header } from './Header.jsx';
import Filter from './Filter.jsx';
import { TableOfIssues } from './TableOfIssues.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { issues: [] };

    this.refreshPage = this.refreshPage.bind(this);
    this.iFilter = this.iFilter.bind(this);

    this.selectAll = this.selectAll.bind(this);
    this.selectSingleRow = this.selectSingleRow.bind(this);
    this.selectToDeleteAll = this.selectToDeleteAll.bind(this);
    this.deleteSingleRow = this.deleteSingleRow.bind(this);
    this.cancelSelectToDeleteAll = this.cancelSelectToDeleteAll.bind(this);
    this.cancelAll = this.cancelAll.bind(this);
    this.cancelSingleRow = this.cancelSingleRow.bind(this);
    this.onEditChange = this.onEditChange.bind(this);

    this.deleteIssues = this.deleteIssues.bind(this);
    this.updateIssues = this.updateIssues.bind(this);
    this.submitChanges = this.submitChanges.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch(`/api/issues${this.props.location.search}`)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // console.log('Total count of records:', data._metadata.total_count);
          data.records.forEach((issue) => {
            issue.selected = '';
            issue.creation = new Date(issue.creation);
            if (issue.completion) issue.completion = new Date(issue.completion);
          });
          this.setState({ issues: data.records });
        });
      } else {
        response.json().then((error) => {
          alert(`Failed to fetch issues:${error.message}`);
        });
      }
    })
    .catch((err) => {
      alert('Error in fetching data from server:', err);
    });
  }

  refreshPage() {
    this.loadData();
  }

  iFilter(query) {
    const toQueryString = (obj) => {
      const parts = []; 
      for (let i in obj) {
          if (obj.hasOwnProperty(i)) {
              parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
          }
      }
      return parts.join('&');
    }

    const path = this.props.location.pathname;
    const queryString = toQueryString(query);
    this.props.history.push({pathname: path, search: queryString});
  }

  selectAll() {
    const issues = this.state.issues;
    issues.forEach(issue => issue.selected = 'edit');
    this.setState({ issues: issues });
  }

  selectSingleRow(id) {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue._id === id) return issue.selected = 'edit'; });
    this.setState({ issues: issues });
  }

  selectToDeleteAll() {
    const issues = this.state.issues;
    issues.forEach(issue => issue.selected = 'delete');
    this.setState({ issues: issues });
  }

  deleteSingleRow(id) {
    const issues = this.state.issues;
    issues.forEach(iss => { if (iss._id === id) return iss.selected = 'delete'; });
    this.setState({ issues: issues });
  }

  cancelSelectToDeleteAll() {
    this.selectAll()
  }

  cancelAll() {
    const issues = this.state.issues;
    issues.forEach(issue =>  issue.selected = '');
    this.setState({ issues: issues });
  }

  cancelSingleRow(id) {
    const issues = this.state.issues;
    issues.forEach(issue => { if (issue._id === id) return issue.selected = ''; });
    this.setState({ issues: issues });
  }

  onEditChange(editChange, id) {
    const issues = this.state.issues;
    issue = issues.map(issue => { if (issue._id === id) return issue; });
    if ((editChange === 'edit') || (editChange === 'undelete')) {
        issues.forEach(issue => { if (issue._id === id) return issue.selected = 'edit'; });
        issues[id] = 'edit';
        this.setState({ issues: issues });
    } else if (editChange === 'delete') {
        issues.forEach(issue => { if (issue._id === id) return issue.selected = 'delete'; });
        issues[id] = 'delete';
        this.setState({ issues: issues });
    } else if (editChange === 'cancel') {
        issues.forEach(issue => { if (issue._id === id) return issue.selected = ''; });
        delete issues[id] ;
        this.setState({ issues: issues });
    }
  }

  deleteIssues(issues) {
    const rowsToDelete = issues.filter(issue => issue.selected === 'delete');

    rowsToDelete.forEach(row => fetch(`/api/issues/${row._id}`, {method: 'DELETE'})
      .then(response => {
        if (response.ok) {
            //delete selectedRows[id];

        } else {
            alert(`Failed to delete issue: ${id}!`);
        }
      })
      .catch(error => alert(error))
    );
  }

  updateIssues(issues) {
    const rowsToUpdate = issues.filter(issue => issue.selected === 'edit');
    
    rowsToUpdate.forEach((row) => {
      const issue = {};
      const properties = ['state', 'owner', 'creation', 'effort', 'completion', 'description'];

      properties.forEach((property) => {
        const input = document.forms.tableForm[`${id+property}`];
        input.value ? issue[property] = input.value : issue[property] = input.placeholder;
        if (property === 'creation' || property === 'completion') {
          let date = Date.parse(issue[property]);
          date = new Date(date);
          issue[property] = date.toISOString();
        } 
      });

      const putParams = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(issue),  
      }

      fetch(`/api/issues/${row._id}`, putParams)
      .then(response => {
        if (response.ok) {
            //delete selectedRows[id];
        } else {
            alert(`Failed to update issue: ${id}!`);
        }
        this.setState({selectedRows: {}});
      })
      .catch(err => alert(`Error in sending data to server: ${err.message}`))
    });
  }

  submitChanges(event) {
    event.preventDefault();

    if (Object.keys(this.state.invalidFields).length !== 0) {
      return;
    }

    const issues = this.state.issues;

    this.deleteIssues(issues);
    this.updateIssues(issues);

    this.refreshPage();
  }

  render() {
    return (
      <Fragment>
        <Header refreshPage={this.refreshPage}/>
        <Filter iFilter={this.iFilter} query={this.props.location.search} />
        <TableOfIssues 
          issues={this.state.issues} 
          refreshPage={this.refreshPage}
          submitChanges={this.submitChanges}
          selectSingleRow={this.selectSingleRow} 
          cancelSingleRow={this.cancelSingleRow}
          deleteSingleRow={this.deleteSingleRow}
          selectAll={this.selectAll} 
          selectToDelete={this.selectToDelete}
          cancelSelectToDelete={this.cancelSelectToDelete}
          cancelAll={this.cancelAll}
        />
      </Fragment>
    );
  }
}


const NoMatch = () => <p>Page Not Found</p>;

const RoutedApp = () => (
  <Router>
    <Route path="/" render={(props) => { 
      return (
        <Fragment>
          <div className="container-fluid">
            <Switch>
              <Route path="/issues" component={withRouter(Main)} />
              <Redirect from="/" to="/issues" />
              <Route path="*" component={NoMatch} />
            </Switch>
          </div>
          <div className="footer">
            Full source code available at: <a href="https://github.com/vasansr/pro-mern-stack">
            GitHub repository</a>.
          </div>
        </Fragment>
      )
    }} />
  </Router>
);


const mainNode = document.getElementById('main');
ReactDOM.render(<RoutedApp />, mainNode);

if (module.hot) module.hot.accept();
