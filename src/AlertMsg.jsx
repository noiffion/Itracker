import React     from 'react';
import PropTypes from 'prop-types';
import Toast     from 'react-bootstrap/Toast';
import Button    from 'react-bootstrap/Button';


const AlertMsg = props => {
  const setAlert = props.setAlert;
  const alertMsg = props.alertMsg;
  const alertShow = props.alertShow;
  const normalMsg = props.normalMsg;
  
  return (
    <section id="alertSection">
      <Toast  
        id="alertToast" 
        className={normalMsg ? 'successToast' : 'errorToast'}
        onClose={() => setAlert(' ', true, false)} 
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
  setAlert: PropTypes.func.isRequired,
  alertMsg: PropTypes.string.isRequired,
  alertShow: PropTypes.bool.isRequired,
  normalMsg: PropTypes.bool.isRequired,
}


export default AlertMsg;
