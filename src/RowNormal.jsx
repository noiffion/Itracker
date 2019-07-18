// RowNormal.jsx

import React       from 'react';
import PropTypes   from 'prop-types';
import Button      from 'react-bootstrap/Button';


function RowNormal(props) {
  const is = props.issue;
  return (
    <tr>
      <td id="issueId" title={is._id}>{is._id.substr(-4)}</td>
      <td id="issueState">{is.issueState}</td>
      <td id="issueOwner">{is.owner}</td>
      <td id="issueCreation">{is.creation.toDateString()}</td>
      <td id="issueEffort">{is.effort}</td>
      <td id="issueCompletion">
        {is.completion ? is.completion.toDateString() : ''} 
      </td>
      <td id="issueDescription">{is.description}</td>
      <td className="buttonCell"> 
        <Button
          title="Edit row" variant="warning" size="sm" 
          onClick={() => props.selectSingleRow(is._id)}>
          <i className="far fa-edit"></i>
        </Button>
      </td>
    </tr>
  );  
};

RowNormal.propTypes = { 
  issue: PropTypes.object.isRequired,
  selectSingleRow: PropTypes.func.isRequired,
};


export default RowNormal;
