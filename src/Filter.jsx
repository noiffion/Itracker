// Filter.jsx

import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import Row                 from 'react-bootstrap/Row';
import Form                from 'react-bootstrap/Form';
import Button              from 'react-bootstrap/Button';
import DatePicker          from './DatePicker.jsx';


const Filter = props => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState('All');
  const [owner, setOwner] = useState('');
  const [description, setDesc] = useState('');
  const [effortGte, setEffGte] = useState(1);
  const [effortLte, setEffLte] = useState(10);
  const [from, setFrom] = useState('All');
  const [until, setUntil] = useState('All');

  const iFilter = props.iFilter;


  const filterMaker = () => {
    return {
      state: state,
      owner: owner || 'All',
      description: description || 'All',
      effort: (effortGte === 1 && effortLte === 10) ? 'All' : [effortGte, effortLte],
      creation: (from === 'All' && until === 'All') ? 'All' : [from, until],
    };
  }

  const onChangeState = (event) => {
    const filter = filterMaker();
    const tValue = event.target.value;
    filter.state = tValue;
    iFilter(filter);
    setState(tValue);
  }

  const onChangeOwner = (event) => {
    const filter = filterMaker();
    const tValue = event.target.value.toLowerCase();
    (tValue === '') ? filter.owner = 'All' : filter.owner = tValue;
    iFilter(filter);
    setOwner(tValue);
  }

  const onChangeDate = (date, subType) => {
    const filter = filterMaker();
    if (subType === 'from') {
      setFrom(date);
      if (date === 'All') {
        until === 'All' ? filter.creation = 'All' : filter.creation = [new Date(1), until];
      } else {
        until === 'All' ? filter.creation = [date, new Date(2100, 0, 1)] : filter.creation = [date, until];
      } 
    } else if (subType === 'until') {
      setUntil(date);
      if (date === 'All') {
        from === 'All' ? filter.creation = 'All' : filter.creation = [from, new Date(2100, 0, 1)];
      } else {
        from === 'All' ? filter.creation = [new Date(1), date] : filter.creation = [from, date];
      }
    }
    iFilter(filter);
  }

  const onChangeEffort = (event, subType) => {
    const filter = filterMaker();
    const tValue = Number(event.target.value);
    if (tValue > 0 && tValue < 11) {
      if (subType === 'gte' && tValue <= effortLte) {
          setEffGte(tValue);
          if (tValue === 1 && effortLte === 10) {
            filter.effort = 'All';
            iFilter(filter);
            return;
          }
          filter.effort = [tValue, effortLte];
      } else if (subType === 'lte' && tValue >= effortGte){
          setEffLte(tValue);
          if (effortGte === 1 && tValue === 10) {
            filter.effort = 'All';
            iFilter(filter);
            return;
          }
          filter.effort = [effortGte, tValue];
      }
      iFilter(filter);
    }
  }

  const onChangeDesc = (event) => {
    const filter = filterMaker();
    const tValue = event.target.value.toLowerCase();
    (tValue === '') ? filter.description = 'All' : filter.description = tValue;
    iFilter(filter);
    setDesc(tValue);
  }

  const clearFilter = () => {
    filter = filterMaker();
    Object.keys(filter).forEach(key => filter[key] = 'All');

    setState('All');
    setOwner('');
    setDesc('');
    setEffGte(1);
    setEffLte(10);
    setFrom('All');
    setUntil('All');

    iFilter(filter);
  }

  const optionMaker = (unique) => {
    const options = [];

    const recOpt = (till, current) => {
      if (current > till) return;
      options.push(<option key={current+unique}> {current} </option>);
      return recOpt(till, current+1);
    }
    recOpt(10, 1);
    return options;
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
          <Form.Control as="select" value={state}
            onChange={onChangeState} size="sm"
          >
            <option>All</option>
            <option>New</option>
            <option>Open</option>
            <option>Assigned</option>
            <option>Fixed</option>
            <option>Verified</option>
            <option>Closed</option>
          </Form.Control>
        </Form.Group>

        <Form.Text sm={2}> Owner: </Form.Text>
        <Form.Group id="ownerFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="Name" value={owner}
            onChange={onChangeOwner} 
          />
        </Form.Group>
         
        <Form.Text sm={2}> Effort: </Form.Text>
        <Form.Row id="effortFilter"> 
          <Form.Group id="effortGte">
            <Form.Control as="select" value={effortGte}
              onChange={(event) => onChangeEffort(event, 'gte')} size="sm"
            >
            {optionMaker('effortGte')}
            </Form.Control>
          </Form.Group>
          <Form.Text>&nbsp;―&nbsp;</Form.Text>
          <Form.Group id="effortLte">
            <Form.Control as="select" value={effortLte}
              onChange={(event) => onChangeEffort(event, 'lte')} size="sm"
            >
            {optionMaker('effortLte')}
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Text sm={2}> Description </Form.Text>
        <Form.Group id="descFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="Description" value={description}
            onChange={onChangeDesc}
          />
        </Form.Group>

        <Form.Text sm={2}> From: </Form.Text>
        <DatePicker 
          date={from}
          subType="from"
          onChangeDate={onChangeDate}
        />

        <Form.Text sm={2}> Until: </Form.Text>
        <DatePicker 
          date={until}
          subType="until"
          onChangeDate={onChangeDate} 
        />

        <Form.Group>
          <Button id="clearFilter" variant="success" onClick={clearFilter}>
            <i className="fas fa-undo-alt"></i>&nbsp;Clear
          </Button>
        </Form.Group>

      </Form>

    </section>
  );
}


Filter.propTypes = {
  iFilter: PropTypes.func.isRequired,
  canvasToggle: PropTypes.func.isRequired,
};


export default Filter;
