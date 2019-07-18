// DatePicker.jsx

import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import Button              from 'react-bootstrap/Button';
import Modal               from 'react-bootstrap/Modal';
import InfiniteCalendar    from 'react-infinite-calendar';


function DatePicker(props) {
  const [modal, setModal] = useState(false);
  const [selectedDate, setDate] = useState('All');

  return (
    <React.Fragment>

      <Button 
        className="datePickerBtns" title="Select a date"
        variant="info" onClick={() => setModal(true)}
      >
          {props.date === 'All' ? 'All' : new Date(props.date).toLocaleDateString()}
      </Button>

      <Modal show={modal} onHide={() => setModal(false)}>
          <Modal.Header closeButton>
            {props.type === 'from' ? 'From' : 'Until'}
          </Modal.Header>
          <Modal.Body style={{display: 'flex', justifyContent: 'center'}}>
          <InfiniteCalendar
            min={new Date(2018, 0, 1)}
            max={new Date(2020, 12, 31)}
            minDate={new Date(2018, 0, 1)}
            maxDate={new Date(2020, 12,31)}
            height={window.innerHeight - 400}
            selected={false}
            display='years'
            locale={{
              blank: 'Select a date...',
              headerFormat: 'ddd, MMM Do',
              todayLabel: {
                long: 'Today',
              },
              weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              weekStartsOn: 1,
            }}
            onSelect={(date) => setDate(new Date(date)) }
          />
          </Modal.Body>
          <Modal.Footer>
            <Button 
              variant="primary" 
              onClick={(event) => {
                event.target.value = selectedDate;
                props.iFilter(event, props.type);
                setDate('All');
                setModal(false);
              }}
            >
              Pick date
            </Button>
          </Modal.Footer>
        </Modal>

    </React.Fragment>
  )
}


DatePicker.propTypes = {
  iFilter: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};


export default DatePicker;
