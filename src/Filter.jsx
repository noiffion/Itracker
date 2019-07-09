// Filter.jsx

import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import Row                 from 'react-bootstrap/Row';
import Form                from 'react-bootstrap/Form';
import Button              from 'react-bootstrap/Button';
import InputGroup          from 'react-bootstrap/InputGroup';


const Filter = props => {
  const [sts, setStatus] = useState('All');
  const [effortGte, setEffGte] = useState(1);
  const [effortLte, setEffLte] = useState(10);

  const iFilter = props.iFilter;

  const filterObj = () => {
    return {
      state: sts,
      owner: 'All',
      creation: 'All',
      effort: [effortGte, effortLte],
      completion: 'All',
      description: 'All',
    };
  }

  const onChangeSts = (event) => {
    const filter = filterObj();
    const tValue = event.target.value;
    filter.state = tValue;
    iFilter(filter);
    setStatus(tValue);
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

  const clearFilter = () => {
    filter = filterObj();
    Object.keys(filter).forEach(key => filter[key] = 'All');
    setStatus('All');
    setEffGte(1);
    setEffLte(10);
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
          <Form.Control as="select" value={sts}
            onChange={onChangeSts} size="sm"
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
          <Form.Control type="text" size="sm" placeholder="Name" />
        </Form.Group>
          
        <Form.Text sm={2}> Created On: </Form.Text>
        <Form.Group className="datesFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="DD-MM-YYYY" />
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

        <Form.Text sm={2}> Completed On: </Form.Text>
        <Form.Group className="datesFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="DD-MM-YYYY" />
        </Form.Group>

        <Form.Text sm={2}> Description </Form.Text>
        <Form.Group id="descFilter" type="text">
          <Form.Control type="text" size="sm" placeholder="Description" />
        </Form.Group>



        <Form.Group>
          <Button variant="success" onClick={clearFilter}>
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
