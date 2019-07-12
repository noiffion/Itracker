// Add.jsx

import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import { withRouter }      from 'react-router';
import Nav                 from 'react-bootstrap/Nav';
import Button              from 'react-bootstrap/Button';
import ButtonToolbar       from 'react-bootstrap/ButtonToolbar';
import Form                from 'react-bootstrap/Form';
import Modal               from 'react-bootstrap/Modal';


const Add = props => {
  const [show, setShow] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const effort = Number(event.target.effortAdd.value);
    if (effort < 1 || effort > 10) {
      const effErr = new Error(`Invalid Effort value`);
      props.setAlert(`${effErr.message}`, false);
      throw effErr;
    }

    const newIssue = {
      state: 'New',
      owner: form.ownerAdd.value,
      creation: new Date(),
      effort: form.effortAdd.value, 
      completion: null,
      description: form.descAdd.value,
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
          .then(error => alertMsg(true, `Failed to add issue: ${error.message}`));
      }
    })
    .catch(err => alertMsg(`Error in sending data to server: ${err.message}`));
  }

  return (
    <Nav.Item>
      <Button id="createIssueModal" variant="light" onClick={() => setShow(true)}>
        <i className="fas fa-plus"></i>{' '}
        Create Issue
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="addForm" id="addForm" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Owner</Form.Label>
                <Form.Control name="ownerAdd" as="input"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Effort</Form.Label>
                <Form.Control name="effortAdd" as="input"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control name="descAdd" as="input" autoFocus />
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


Add.propTypes = {
  refreshPage: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};


export default Add;
