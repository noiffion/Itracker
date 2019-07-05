// Header.jsx

import React          from 'react';
import PropTypes      from 'prop-types';
import Button         from 'react-bootstrap/Button'
import Navbar         from 'react-bootstrap/Navbar'
import Nav            from 'react-bootstrap/Nav'
import Dropdown       from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Add            from './Add.jsx';


class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}


export const Header = props => {
  return (
    <Navbar id="navbar">
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
      <Nav className="justify-content-between">
        <Add refreshPage={props.refreshPage}/>
        <Dropdown id="user-dropdown" navbar={true} drop="left">
          <Dropdown.Toggle as={CustomToggle}>
            <i className="fas fa-ellipsis-h"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}
