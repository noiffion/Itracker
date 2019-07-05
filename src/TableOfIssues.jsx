// TableOfIssues.jsx

import React        from 'react';
import PropTypes    from 'prop-types';
import Table        from 'react-bootstrap/Table';
import Form         from 'react-bootstrap/From';
import { Row }      from './Row.jsx';
import Bubble       from './Bubble.jsx';
import tableButtons from './tableButtons.jsx';


export const TableOfIssues = props =>  {
  const issueRows = props.issues.map(issue => {
    return (
      <Row 
        key={issue._id} 
        issue={issue} 
        selectSingleRow={props.selectSingleRow} 
        cancelSingleRow={props.cancelSingleRow}
        deleteSingleRow={props.deleteSingleRow}
      />
    );
  });

  const ids = Object.keys(props.issues);
  const anyEdit = ids.some(id => props.issues[id].selected !== '');
 
  const p = props;
  const tB = tableButtons(p.issues, p.selectAll, p.selectDelAll, p.unSelectDelAll, p.cancelAll);
 
  return (
    <Form name="tableForm" onSubmit={props.submitChanges}>
      <Table size="sm" variant="dark" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>State</th>
            <th>Owner</th>
            <th>Created on</th>
            <th>Effort</th>
            <th>Completed on</th>
            <th>Description</th>
            <th className="cornerButtons">{anyEdit ? tB.editTable : tB.displayTable}</th>
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