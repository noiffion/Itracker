// Filter.jsx

import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import Row                 from 'react-bootstrap/Row';
import Form                from 'react-bootstrap/Form';
import Button              from 'react-bootstrap/Button';
import InputGroup          from 'react-bootstrap/InputGroup';
import Modal               from 'react-bootstrap/Modal';
import InfiniteCalendar    from 'react-infinite-calendar';
import DatePicker          from './DatePicker.jsx';


const Filter = props => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState('All');
  const [owner, setOwner] = useState('');
  const [creation, setCreation] = useState('All');
  const [effortGte, setEffGte] = useState(1);
  const [effortLte, setEffLte] = useState(10);
  const [completion, setCompletion] = useState('All');
  const [description, setDesc] = useState('');

  const iFilter = props.iFilter;

  const filterObj = () => {
    return {
      state: state,
      owner: owner || 'All',
      creation: creation,
      effort: (effortGte === 1 && effortLte === 10) ? 'All' : [effortGte, effortLte],
      completion: completion,
      description: description || 'All',
    };
  }

  const onChangeState = (event) => {
    const filter = filterObj();
    const tValue = event.target.value;
    filter.state = tValue;
    iFilter(filter);
    setState(tValue);
  }

  const onChangeOwner = (event) => {
    const filter = filterObj();
    const tValue = event.target.value.toLowerCase();
    (tValue === '') ? filter.owner = 'All' : filter.owner = tValue;
    iFilter(filter);
    setOwner(tValue);
  }

  const onChangeDate = (date, subType) => {
    const filter = filterObj();
    if (subType === 'creation') {
        if (date === '') { 
            filter.creation = 'All';
            setCreation('All');
        } else {
            date = new Date(date);
            filter.creation = date;
            setCreation(date);
        }
    } else if (subType === 'completion') {
        if (date === '') { 
            filter.completion = 'All';
            setCompletion('All');
        } else {
            date = new Date(date);
            filter.completion = date;
            setCompletion(date);
        }
      }
    iFilter(filter);
  }

  const onChangeEffort = (event, subType) => {
    const filter = filterObj();
    const tValue = Number(event.target.value);
    if (tValue > 0 && tValue < 11) {
      if (subType === 'gte' && tValue <= effortLte) {
          if (tValue === 1 && effortLte === 10) {
            filter.effort = 'All';
            iFilter(filter);
            setEffGte(tValue);
            return;
          }
          filter.effort = [tValue, effortLte];
          iFilter(filter);
          setEffGte(tValue);
      } else if (subType === 'lte' && tValue >= effortGte){
          if (effortGte === 1 && tValue === 10) {
            filter.effort = 'All';
            iFilter(filter);
            setEffGte(tValue);
            return;
          }
          filter.effort = [effortGte, tValue];
          iFilter(filter);
          setEffLte(tValue);       
      }
    }
  }

  const onChangeDesc = (event) => {
    const filter = filterObj();
    const tValue = event.target.value.toLowerCase();
    (tValue === '') ? filter.description = 'All' : filter.description = tValue;
    iFilter(filter);
    setDesc(tValue);
  }

  const clearFilter = () => {
    filter = filterObj();
    Object.keys(filter).forEach(key => filter[key] = 'All');

    setState('All');
    setOwner('');
    setCreation('All');
    setEffGte(1);
    setEffLte(10);
    setCompletion('All');
    setDesc('');

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

        <Form.Text sm={2}> Created On: </Form.Text>
        <DatePicker 
          date={creation}
          subType="creation"
          onChangeDate={onChangeDate}
        />
         
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

        <Form.Text sm={2}> Completed On: </Form.Text>
        <DatePicker 
          date={completion}
          subType="completion"
          onChangeDate={onChangeDate} 
        />

        <Form.Text sm={2}> Description </Form.Text>
        <Form.Group id="descFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="Description" value={description}
            onChange={onChangeDesc}
          />
        </Form.Group>

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
};


export default Filter;
