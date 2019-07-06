// Filter.jsx

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


const Filter = props => {
  const [sts, setSts] = useState('');
  const [effort_gte, setEffGte] = useState('');
  const [effort_lte, setEffLte] = useState('');

  const applyFilter = () => {
    const newFilter = {};
    if (sts) newFilter.sts = sts;
    if (effort_gte) newFilter.effort_gte = effort_gte;
    if (effort_lte) newFilter.effort_lte = effort_lte;
    props.iFilter(newFilter);
  }

  const onChangeSts = (event) => {
    setSts(event.target.value);
    console.log(sts);
    applyFilter();
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
 
  const resetFilter = () => {
    props.iFilter({});
  }
 
  const clearFilter = () => {
    setSts(props.query.sts || sts);
    setEffGte(props.query.effort_gte);
    setEffLte(props.query.effort_lte);
  }
  
  return (
    <Form id="filterForm" name="filter">
      <Form.Group as={Row} id="stateFilter">
        <Form.Label column sm={2}> State: </Form.Label>
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
      </Form.Group>
      <Form.Group as={Row} id="effortFilter">
          <Form.Label column sm={2}> Effort: </Form.Label>
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
      </Form.Group>
      <Form.Group>
        <ButtonGroup size="sm" aria-label="Filter_buttons" id="applyClear">
          <Button onClick={applyFilter}>
            Apply
          </Button>&nbsp;
          <Button variant="info" onClick={clearFilter}>
            Clear 
          </Button>
          <Button variant="info" onClick={resetFilter}
            disabled={props.query === ''}>
            Reset
          </Button>
        </ButtonGroup>
      </Form.Group>
    </Form>
  );
}


Filter.propTypes = {
  iFilter: PropTypes.func.isRequired,
};


export default Filter;
