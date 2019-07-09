// DatePicker.jsx

import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import Button              from 'react-bootstrap/Button';
import Modal               from 'react-bootstrap/Modal';
import InfiniteCalendar    from 'react-infinite-calendar';


const DatePicker = props => {
  const [modal, setModal] = useState(false);
  const [selectedDate, setDate] = useState('');

  return (
    <React.Fragment>

      <Button 
        className="datePickerBtns" title="Select a date"
        variant="info" onClick={() => setModal(true)}
      >
          {props.date === 'All' ? 'All' : props.date.toLocaleDateString()}
      </Button>

      <Modal show={modal} onHide={() => setModal(false)}>
          <Modal.Header closeButton>
            {props.subType === 'creation' ? 'Created On' : 'Completed On'}
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
              onClick={() => { 
                props.onChangeDate(selectedDate, props.subType);
                setDate('');
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
  onChangeDate: PropTypes.func.isRequired,
  subType: PropTypes.string.isRequired
};


export default DatePicker;
