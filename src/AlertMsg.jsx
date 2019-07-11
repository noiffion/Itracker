import React     from 'react';
import PropTypes from 'prop-types';
import Toast     from 'react-bootstrap/Toast';
import Button    from 'react-bootstrap/Button';


const AlertMsg = props => {
  const setAlert = props.setAlert;
  const alertMsg = props.alertMsg;
  const alertShow = props.alertShow;
  
  return (
    <section id="alertSection">
      <Toast id="alertToast" autohide
        onClose={() => setAlert(false, ' ')} 
        show={alertShow} delay={3000} 
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
}


export default AlertMsg;
