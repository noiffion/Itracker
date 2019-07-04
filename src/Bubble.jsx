// Bubble.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert, Collapse } from 'react-bootstrap';

//TODO: useState, useEffect

export default class Bubble extends React.Component {
  componentDidUpdate() {
    if (this.props.showing) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = setTimeout(this.props.onDismiss, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  // onDismiss={this.props.onDismiss}
  render() {
    return (
      <Collapse in={this.props.showing}>
        <div style={{ position: 'fixed', top: 30, left: 0, right: 0, textAlign: 'center' }}>
          <Alert style={{ display: 'inline-block', width: 500 }} >
            {this.props.message}
          </Alert>
        </div>
      </Collapse>
    );
  }
}


Bubble.propTypes = {
  showing: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  bsStyle: PropTypes.string,
  message: PropTypes.any.isRequired,
};

Bubble.defaultProps = {
  bsStyle: 'success',
};
