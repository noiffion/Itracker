// RowSelEdDel.jsx

import React     from 'react';
import PropTypes from 'prop-types';
import Button    from 'react-bootstrap/Button';
import Form      from 'react-bootstrap/Form';


export const BeingEdited = props => {

  const is = props.issue;

  const stateOptions = () => {
    const states = ['New', 'Open', 'Assigned', 'Fixed', 'Verified', 'Closed'];
    const options = states.map((state, i) => (<option key={state+i}> {state} </option>));
    return options; 
  }

  const optionMaker = (till, current, unique, options=[]) => {
    if (current > till) return options;
    options.push(<option key={current+unique}> {current} </option>);     
    return optionMaker(till, current+1, unique, options);
  }

  return (
    <tr>

      <td id="issueId" title={is._id}>
          {is._id.substr(-4)}
      </td>

      <td id="issueState">
          <Form.Control name={is._id+'issueState'} size="sm" as="select" defaultValue={is.issueState}>
            {stateOptions()}
          </Form.Control>
      </td>

      <td id="issueOwner">
          <Form.Control name={is._id+'owner'} size="sm" as="input" placeholder={is.owner} />
      </td>

      <td id="issueCreation">
          <Form.Control name={is._id+'creation'} size="sm" as="input" 
                        placeholder={is.creation.toDateString()} />
      </td>

      <td id="issueEffort">
          <Form.Control name={is._id+'effort'} size="sm" as="select" defaultValue={is.effort}>
            {optionMaker(10, 1, 'effort')}
          </Form.Control>
      </td>

      <td id="issueCompletion">
          <Form.Control name={is._id+'completion'} size="sm" as="input"
            placeholder={is.completion ? is.completion.toDateString() : ''} />
      </td>

      <td id="issueDescription">
          <Form.Control name={is._id+'description'} size="sm" as="input"
                        placeholder={is.description} />
      </td>

      <td className="buttonCell">
          <Button title="Delete issue" variant="light" size="sm"
                  onClick={() => props.deleteSingleRow(is._id)}>
            <i className="far fa-trash-alt"></i>
          </Button>&nbsp;
          <Button title="Cancel" variant="secondary" size="sm"
                  onClick={() => props.cancelSingleRow(is._id)}>
            <i className="fas fa-ban"></i>
          </Button>
      </td>
    </tr>
  );
};


BeingEdited.propTypes = {
  issue: PropTypes.object.isRequired,
};


export const BeingDeleted = props => {
  const is = props.issue;
  return (
    <tr>

      <td id="deletedIssueId" title={is._id}>
        {is._id.substr(-4)}
      </td>

      <td id="issueState">
        <Form.Control disabled size="sm" as="input" placeholder="—" />
      </td>

      <td id="issueOwner">
        <Form.Control disabled size="sm" as="input" placeholder="—" />
      </td>

      <td id="issueCreation">
        <Form.Control disabled size="sm" as="input" placeholder="—" />
      </td>

      <td id="issueEffort">
        <Form.Control disabled size="sm" as="input" placeholder="—" />
      </td>

      <td id="issueCompletion">
        <Form.Control disabled size="sm" as="input" placeholder="—" />
      </td>

      <td id="issueDescription">
        <Form.Control disabled size="sm" as="input" placeholder="—" />
      </td>

      <td className="buttonCell">
        <Button title="Cancel delete" variant="danger" size="sm"
                onClick={() => props.cancelDelete(is._id)}>
          <i className="far fa-trash-alt"></i>
        </Button>&nbsp;
        <Button title="Cancel edit" variant="secondary" size="sm"
                onClick={() => props.cancelSingleRow(is._id)}>
          <i className="fas fa-ban"></i>
        </Button>
      </td>
    </tr>
  )
};

BeingDeleted.propTypes = {
  issue: PropTypes.object.isRequired,
};
