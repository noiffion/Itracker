// AlertMsg.jsx

import React     from 'react';
import PropTypes from 'prop-types';
import Toast     from 'react-bootstrap/Toast';


function AlertMsg(props) {
  const displayAlert = props.displayAlert;
  const alertMsg = props.alertMsg;
  const alertShow = props.alertShow;
  const normalMsg = props.normalMsg;
  
  return (
    <section id="alertSection">
      <Toast  
        id="alertToast" 
        className={normalMsg ? 'successToast' : 'errorToast'}
        onClose={() => displayAlert(' ', true, false)} 
        show={alertShow} 
        delay={3000} 
        autohide
      >
        <Toast.Body >
          {alertMsg}
        </Toast.Body>
      </Toast>
    </section>
  );
}


AlertMsg.propTypes = {
  displayAlert: PropTypes.func.isRequired,
  alertMsg: PropTypes.string.isRequired,
  alertShow: PropTypes.bool.isRequired,
  normalMsg: PropTypes.bool.isRequired,
}


export default AlertMsg;
