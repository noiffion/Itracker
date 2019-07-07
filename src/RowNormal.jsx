// RowNormal.jsx

import React       from 'react';
import PropTypes   from 'prop-types';
import Button      from 'react-bootstrap/Button';


const RowNormal = props => {
  const iss = props.issue;
  return (
    <tr>
      <td id="issueId" title={iss._id}>{iss._id.substr(-4)}</td>
      <td id="issueState">{iss.state}</td>
      <td id="issueOwner">{iss.owner}</td>
      <td id="issueCreation">{iss.creation.toDateString()}</td>
      <td id="issueEffort">{iss.effort}</td>
      <td id="issueCompletion">
        {iss.completion ? iss.completion.toDateString() : ''} 
      </td>
      <td id="issueDescription">{iss.description}</td>
      <td className="buttonCell"> 
        <Button
          title="Edit row" variant="warning" size="sm" 
          onClick={() => props.selectSingleRow(iss._id)}>
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
