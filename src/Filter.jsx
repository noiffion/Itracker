// Filter.jsx

import React, { useState, useEffect } from 'react';
import PropTypes                      from 'prop-types';
import Row                            from 'react-bootstrap/Row';
import Form                           from 'react-bootstrap/Form';
import Button                         from 'react-bootstrap/Button';
import DatePicker                     from './DatePicker.jsx';


function Filter(props) {

  const f = props.filter;

  const stateOptions = () => {
    const states = ['All', 'New', 'Open', 'Assigned', 'Fixed', 'Verified', 'Closed'];
    const options = states.map((state, i) => (<option key={state+i}> {state} </option>));
    return options;
  }

  const optionMaker = (current, till, unique, options=[]) => { 
    if (current > till) return options;
    options.push(<option key={current+unique}> {current} </option>);
    return optionMaker(current+1, till, unique, options);
  }

  return (
    <section id="sideFilter">

      <div id="sideCloseDiv">
        <Button onClick={props.canvasToggle} variant="light">
          <i className="fas fa-times"></i>
        </Button>
      </div>

      <Form id="filterForm" name="filter" >

        <Form.Text sm={2}> State: </Form.Text>
        <Form.Group as={Row} id="stateFilter">
          <Form.Control as="select" value={f.issueState}
            onChange={(event) => props.iFilter(event, 'issueState')} size="sm"
          >
            {stateOptions()}
          </Form.Control>
        </Form.Group>

        <Form.Text sm={2}> Owner: </Form.Text>
        <Form.Group id="ownerFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="Name" value={f.owner}
            onChange={(event) => props.iFilter(event, 'owner')} 
          />
        </Form.Group>
         
        <Form.Text sm={2}> Effort: </Form.Text>
        <Form.Row id="effortFilter"> 
          <Form.Group id="effortGte">
            <Form.Control as="select" value={f.effortGte}
              onChange={(event) => props.iFilter(event, 'effortGte')} size="sm"
            >
            {optionMaker(1, 10, 'effortGte')}
            </Form.Control>
          </Form.Group>
          <Form.Text>&nbsp;―&nbsp;</Form.Text>
          <Form.Group id="effortLte">
            <Form.Control as="select" value={f.effortLte}
              onChange={(event) => props.iFilter(event, 'effortLte')} size="sm"
            >
            {optionMaker(1, 10, 'effortLte')}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Text sm={2}> Description </Form.Text>
        <Form.Group id="descFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="Description" value={f.description}
            onChange={(event) => props.iFilter(event, 'description')}
          />
        </Form.Group>

        <Form.Text sm={2}> From: </Form.Text>
        <DatePicker 
          date={f.from}
          type="from"
          iFilter={props.iFilter}
        />

        <Form.Text sm={2}> Until: </Form.Text>
        <DatePicker 
          date={f.until}
          type="until"
          iFilter={props.iFilter}
        />

        <Form.Group>
          <Button id="clearFilter" variant="success" 
                  onClick={(event) => props.iFilter(event, 'clearFilter')}
          >
            <i className="fas fa-undo-alt"></i>&nbsp;Clear
          </Button>
        </Form.Group>

      </Form>

    </section>
  );
}


Filter.propTypes = {
  iFilter: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  canvasToggle: PropTypes.func.isRequired,
};


export default Filter;
