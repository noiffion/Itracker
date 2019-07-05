// Filt.jsx

import React, { useState } from 'react';
import { withRouter }      from 'react-router';
import PropTypes           from 'prop-types';
import Row                 from 'react-bootstrap/Row';
import Col                 from 'react-bootstrap/Col';
import Nav                 from 'react-bootstrap/Nav';
import Card                from 'react-bootstrap/Card';
import Form                from 'react-bootstrap/Form';
import Modal               from 'react-bootstrap/Modal';
import Button              from 'react-bootstrap/Button';
import Collapse            from 'react-bootstrap/Collapse';
import Dropdown            from 'react-bootstrap/Dropdown';
import InputGroup          from 'react-bootstrap/InputGroup';
import ButtonGroup         from 'react-bootstrap/ButtonGroup';
import ButtonToolbar       from 'react-bootstrap/ButtonToolbar';
import DropdownButton      from 'react-bootstrap/DropdownButton';


const Filt = props => {
  const [show, setShow] = useState(false);
  const [opened, setOpen] = useState(false);
  const [sts, setSts] = useState('');
  const [effort_gte, setEffGte] = useState('');
  const [effort_lte, setEffLte] = useState('');


  const onChangeSts = (event) => {
    setSts(event.target.value);
  }
 
  const onChangeEffortGte = (event) => {
    const effortString = event.target.value;
    if (effortString.match(/^\d*$/)) {
      setEffGte(effortString);
    }
  }
 
  const onChangeEffortLte = (event) => {
    const effortString = event.target.value;
    if (effortString.match(/^\d*$/)) {
      setEffLte(effortString);
    }
  }
 
  const applyFilter = () => {
    const newFilter = {};
    if (sts) newFilter.sts = sts;
    if (effort_gte) newFilter.effort_gte = effort_gte;
    if (effort_lte) newFilter.effort_lte = effort_lte;
    props.iFilter(newFilter);
  }
 
  const resetFilter = () => {
    props.iFilter({});
  }
 
  const clearFilter = () => {
    setSts(props.query.sts || sts);
    setEffGte(props.query.effort_gte);
    setEffLte(props.query.effort_lte);
  }
  
  return (
    <Nav.Item>
      <span onClick={() => setShow(true)}>
        Filter 
      </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card id="filterCard">
              <Card.Header id="filteReset">
                <Button 
                  onClick={() => setOpen(!opened)} 
                  aria-controls="filter-collapse" 
                  aria-expanded={opened}
                >
                  Filter 
                </Button>&nbsp;&nbsp;
                <Button variant="info" onClick={resetFilter}
                disabled={props.query === ''}>
                  Reset
                </Button>
              </Card.Header>
              <Card.Body>
                <Collapse in={opened}>
                  <Form name="filterCollapse">
                    <Form.Group as={Row} id="stateFilter">
                      <Form.Label column sm={2}> State: </Form.Label>
                      <Col>
                        <Form.Control as="select" value={sts} 
                          onChange={onChangeSts} size="sm"
                        >
                          <option>(Any)</option>
                          <option>New</option>
                          <option>Open</option>
                          <option>Assigned</option>
                          <option>Fixed</option>
                          <option>Verified</option>
                          <option>Closed</option>
                        </Form.Control>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="effort">
                        <Form.Label column sm={2}> Effort: </Form.Label>
                        <Col>
                          <InputGroup size="sm">
                            <Form.Control as="input" value={effort_gte} 
                              onChange={onChangeEffortGte} placeholder="from" 
                            />
                             <InputGroup.Append> 
                               <InputGroup.Text>―</InputGroup.Text>
                             </InputGroup.Append>
                            <Form.Control as="input" value={effort_lte} 
                              onChange={onChangeEffortLte} placeholder="to" 
                            />
                          </InputGroup>
                        </Col>
                    </Form.Group>
                    <Form.Group>
                      <ButtonGroup size="sm" aria-label="Filter_buttons" id="applyClear">
                        <Button onClick={applyFilter}>
                          Apply
                        </Button>&nbsp;
                        <Button variant="info" onClick={clearFilter}>
                          Clear 
                        </Button>
                      </ButtonGroup>
                    </Form.Group>
                  </Form>
                </Collapse>
              </Card.Body>
            </Card>
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


export default withRouter(Filt);

Filt.propTypes = {
  iFilter: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
} ;
