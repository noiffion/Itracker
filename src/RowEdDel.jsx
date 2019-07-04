// RowEdDel.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Form } from 'react-bootstrap';


export const BeingEdited = props => (
  <tr>
    <td id="issueId" title={props.iss._id}>
      {props.iss._id.substr(-4)}
    </td>
    <td id="issueState">
      <Form.Control name={props.iss._id+'state'} size="sm" as="input" placeholder={props.iss.state} />
    </td>
    <td id="issueOwner">
      <Form.Control name={props.iss._id+'owner'} size="sm" as="input" placeholder={props.iss.owner} />
    </td>
    <td id="issueCreation">
      <Form.Control name={props.iss._id+'creation'} size="sm" as="input"
                    placeholder={props.iss.creation.toDateString()} />
    </td>
    <td id="issueEffort">
      <Form.Control name={props.iss._id+'effort'} size="sm" as="input" placeholder={props.iss.effort} />
    </td>
    <td id="issueCompletion">
      <Form.Control name={props.iss._id+'completion'} size="sm" as="input"
        placeholder={props.iss.completion ? props.iss.completion.toDateString() : ''} />
    </td>
    <td id="issueDescription">
      <Form.Control name={props.iss._id+'description'} size="sm" as="input"
                    placeholder={props.iss.description} />
    </td>
    <td className="cornerButtons">
      <ButtonToolbar>
        <Button title="Delete issue" variant="light" size="sm"
                onClick={() => props.deleteSingleRow(props.iss._id)}>
          <i className="far fa-trash-alt"></i>
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button title="Cancel" variant="secondary" size="sm"
                onClick={() => props.cancelSingleRow(props.iss._id)}>
          <i className="fas fa-ban"></i>
        </Button>
      </ButtonToolbar>
    </td>
  </tr>
);

BeingEdited.propTypes = {
  iss: PropTypes.object.isRequired,
};


export const BeingDeleted = props => (
  <tr>
    <td id="deletedIssueId" title={props.iss._id}>
      {props.iss._id.substr(-4)}
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
    <td className="cornerButtons">
      <ButtonToolbar>
        <Button title="Cancel delete" variant="danger" size="sm"
                onClick={() => props.cancelDelete(props.iss._id)}>
          <i className="far fa-trash-alt"></i>
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button title="Cancel edit" variant="secondary" size="sm"
                onClick={() => props.cancelSingleRow(props.iss._id)}>
          <i className="fas fa-ban"></i>
        </Button>
      </ButtonToolbar>
    </td>
  </tr>
);

BeingDeleted.propTypes = {
  iss: PropTypes.object.isRequired,
};
