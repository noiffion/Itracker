// TableOfIssues.jsx

import React        from 'react';
import PropTypes    from 'prop-types';
import Table        from 'react-bootstrap/Table';
import Form         from 'react-bootstrap/Form';
import Row          from './Row.jsx';
import tableButtons from './tableButtons.jsx';


function TableOfIssues(props) {
  const p = props;
  const actual = p.actualPage;
  const iPerPage = p.iPerPage;
  const issueRows = [];
  let ind = -1;
  let anyEdit = false;

  p.issues.forEach((issue) => {
    if (issue.filteredIn) {
      ind++;
      if ((ind >= actual * iPerPage) && (ind < actual * iPerPage + iPerPage)) {
          issue.onScreen = true;
          issueRows.push(
           <Row
             key={issue._id}
             issue={issue}
             selectSingleRow={p.selectSingleRow}
             cancelSingleRow={p.cancelSingleRow}
             deleteSingleRow={p.deleteSingleRow}
           />
       );
      } else {
          issue.onScreen = false;
          issue.selected = '';
      }
    }
    if (issue.selected) anyEdit = true;
  });

  const tB = tableButtons(p.issues, p.selectAll, p.selectDelAll, 
    p.unSelectDelAll, p.cancelAll, p.submitChanges);
 
  return (
    <Form name="tableForm" onSubmit={(event) => event.preventDefault()}>
      <Table size="sm" variant="dark" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>State</th>
            <th>Owner</th>
            <th>Created&nbsp;on</th>
            <th>Effort</th>
            <th>Completed&nbsp;on</th>
            <th>Description</th>
            <th className="buttonCell">
              {anyEdit ? tB.editTable : tB.displayTable}
            </th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </Table>
    </Form>
  );
}


TableOfIssues.propTypes = {
  issues: PropTypes.array.isRequired,
  refreshPage: PropTypes.func.isRequired,
};


export default TableOfIssues;
