// Add.jsx

import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import { withRouter }      from 'react-router';
import Nav                 from 'react-bootstrap/Nav';
import Button              from 'react-bootstrap/Button';
import Form                from 'react-bootstrap/Form';
import Modal               from 'react-bootstrap/Modal';


const Add = props => {
  const [show, setShow] = useState(false);

  //TODO: 
  const showError = (error) => {
    console.log(error);
  }

  const handleSubmit = event => {
    event.preventDefault();
  
    const form = document.forms.addForm;
    const newIssue = {
      owner: form.ownerInput.value,
      description: form.descInput.value,
      state: 'New',
      creation: new Date(),
    };
  
    const postParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue),
    }
  
    fetch('/api/issues', postParams)
    .then(response => {
      if (response.ok) {
          response.json()
          .then(() => {
            setShow(false);
            props.refreshPage();
          });
      } else {
          response.json()
          .then(error => showError(`Failed to add issue: ${error.message}`));
      }
    })
    .catch(err => showError(`Error in sending data to server: ${err.message}`));
  }

  return (
    <Nav.Item>
      <span id="createIssueModal" onClick={() => setShow(true)}>
        <i className="fas fa-plus"></i>{' '}
        Create Issue
      </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="addForm" id="addForm" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control name="descInput" as="input" autoFocus />
              </Form.Group>
              <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control name="ownerInput" as="input"/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button type="submit" form="addForm" variant="primary">
                Save to database
              </Button>&nbsp;
              <Button variant="secondary" onClick={() => setShow(false)}>
                Cancel
              </Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
    </Nav.Item>
  );
}


export default withRouter(Add);


Add.propTypes = {
  refreshPage: PropTypes.func.isRequired,
};
