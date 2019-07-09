// Main.jsx

import 'whatwg-fetch';
import React, { Fragment } from 'react';
import ReactDOM            from 'react-dom';
import PropTypes           from 'prop-types';
import {
  OffCanvas,
  OffCanvasMenu,
  OffCanvasBody
}                          from 'react-offcanvas';
import Table               from 'react-bootstrap/Table';
import Button              from 'react-bootstrap/Button';
import Header              from './Header.jsx';
import Filter              from './Filter.jsx';
import Paginator           from './Paginator.jsx';
import TableOfIssues       from './TableOfIssues.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      filterOn: false,
      actualPage: 0,
      maxPageNum: 0,
      iPerPage: 20,
    };

    this.canvasToggle = this.canvasToggle.bind(this);
    
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

  loadData() {
    fetch(`/api/issues`)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // console.log('Total count of records:', data._metadata.total_count);
          data.records.forEach((issue) => {
            if (issue.completion) issue.completion = new Date(issue.completion);
            issue.creation = new Date(issue.creation);
            issue.selected = '';
            issue.filters = {
              state: true,
              owner: true,
              creation: true,
              effort: true,
              completion: true,
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
          alert(`Failed to fetch issues: ${error.message}`);
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

  pageGo(pageNum) {
    this.setState({ actualPage: pageNum })
  }

  iFilter(filter) {
    const issues = this.state.issues;
    const types = Object.keys(filter);
    let count = -1;
    console.log(filter);
    console.log(issues.slice(0,2));

    issues.forEach(issue => {
      types.forEach(type => {
        if (filter[type] === 'All') {
            issue.filters[type] = true;
        } else if (type === 'effort') {
            if (issue[type] < filter[type][0] || issue[type] > filter[type][1]) {
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
        } else {
            if (!issue[type]) {
                issue.filters[type] = false;
            } else if (issue[type].toString() !== filter[type].toString()) {
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
    issues.forEach(issue => { if (issue.filteredIn) return issue.selected = 'edit'; });
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
        width={160} transitionDuration={200} position={"left"}
        effect={"push"} isMenuOpened={this.state.filterOn}
      >
        <OffCanvasBody>
          <Header
            refreshPage={this.refreshPage} 
            canvasToggle={this.canvasToggle} 
            iFilter={this.iFilter}
            maxPageNum={this.state.maxPageNum}
            pageGo={this.pageGo}
          />
          <Paginator 
            actualPage={this.state.actualPage} 
            maxPageNum={this.state.maxPageNum}
            pageGo={this.pageGo}
          />
          <TableOfIssues
            issues={this.state.issues}
            actualPage={this.state.actualPage}
            iPerPage={this.state.iPerPage}
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
          <Paginator 
            actualPage={this.state.actualPage} 
            maxPageNum={this.state.maxPageNum}
            pageGo={this.pageGo}
          />
          <footer>
            <span> Source: </span>
            <a href="https://github.com/noiffion/Itracker.git" target="_blank">
               <i className="fab fa-github" style={{fontSize: '24px'}}></i>
            </a>
          </footer>
        </OffCanvasBody>
        <OffCanvasMenu>
          <Filter iFilter={this.iFilter} canvasToggle={this.canvasToggle} />
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}

const mainNode = document.getElementById('main');
ReactDOM.render(<Main />, mainNode);

if (module.hot) module.hot.accept();
