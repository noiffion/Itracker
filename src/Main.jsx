// Main.jsx

import 'whatwg-fetch';
import React, { Fragment } from 'react';
import ReactDOM            from 'react-dom';
import PropTypes           from 'prop-types';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect,
  Link, 
  withRouter 
}                          from 'react-router-dom';
import { 
  OffCanvas, 
  OffCanvasMenu, 
  OffCanvasBody
}                          from "react-offcanvas";
import Button              from 'react-bootstrap/Button';
import Table               from 'react-bootstrap/Table';
import Filter              from './Filter.jsx';
import { TableOfIssues }   from './TableOfIssues.jsx';
import { Header }          from './Header.jsx';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      issues: [],  
      filterOn: false,
    };

    this.canvasToggle = this.canvasToggle.bind(this);

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
        const input = document.forms.tableForm[`${row._id+property}`];
        input.value ? issue[property] = input.value : issue[property] = input.placeholder;
        if (property === 'creation' || property === 'completion') {
          let date = Date.parse(issue[property]);
          date ? date = (new Date(date)).toISOString() : date = null;
          issue[property] = date;
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

    /*
    if (Object.keys(this.state.invalidFields).length !== 0) {
      return;
    }
    */

    const issues = this.state.issues;

    this.deleteIssues(issues);
    this.updateIssues(issues);

    this.refreshPage();
  }

  render() {
    return (
      <OffCanvas
        width={400} transitionDuration={200} position={"left"}
        effect={"push"} isMenuOpened={this.state.filterOn}
      >
        <OffCanvasBody>
          <Header refreshPage={this.refreshPage} canvasToggle={this.canvasToggle} />
          <TableOfIssues 
            issues={this.state.issues} 
            refreshPage={this.refreshPage}
            submitChanges={this.submitChanges}
            selectSingleRow={this.selectSingleRow} 
            cancelSingleRow={this.cancelSingleRow}
            deleteSingleRow={this.deleteSingleRow}
            selectAll={this.selectAll} 
            selectDelAll={this.selectDelAll}
            unSelectDelAll={this.unSelectDelAll}
            cancelAll={this.cancelAll}
          />
        </OffCanvasBody>
        <OffCanvasMenu>
          <Filter iFilter={this.iFilter} query={this.props.location.search} />
          <a href="#" onClick={this.canvasToggle}>Close</a>
        </OffCanvasMenu>
      </OffCanvas>
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
          <footer>
            <span> Source: </span>
            <a href="https://github.com/noiffion/Itracker.git" target="_blank">
               <i className="fab fa-github" style={{fontSize: '24px'}}></i>
            </a>
          </footer>
        </Fragment>
      )
    }} />
  </Router>
);


const mainNode = document.getElementById('main');
ReactDOM.render(<RoutedApp />, mainNode);

if (module.hot) module.hot.accept();
