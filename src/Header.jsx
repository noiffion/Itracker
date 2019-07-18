// Header.jsx

import React          from 'react';
import PropTypes      from 'prop-types';
import Nav            from 'react-bootstrap/Nav';
import Form           from 'react-bootstrap/Form';
import Button         from 'react-bootstrap/Button';
import Navbar         from 'react-bootstrap/Navbar';
import Dropdown       from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Add            from './Add.jsx';
import Login          from './Login.jsx';


class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(event);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}


function Header(props) {

  const logIn = (
   <React.Fragment>
    <Dropdown.Item className="userInfos">
      <span>You are not signed in </span>
    </Dropdown.Item>
    <Dropdown.Item id="signIn" href="/auth/github/login">
      <span>Sign in</span><i className="fab fa-github-square fa-2x"></i>
    </Dropdown.Item>
   </React.Fragment>
  );

  const logOut = (
   <React.Fragment>
    <Dropdown.Item className="userInfos">
      <span>{props.signIn.username} </span><img src={props.signIn.avatar} height="20" width="20"/>
    </Dropdown.Item>
    <Dropdown.Item id="loggedIn" href="/auth/github/logout">
      <span>Sign out</span>
    </Dropdown.Item> 
   </React.Fragment>
  ); 

  return (
    <Navbar id="navbar">
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
      <Nav id="navItems">
        <Form onSubmit={() => event.preventDefault()}>
          <Form.Control
            id="goToPage" title="Number + Enter to go to page"
            style={{width: '50px', fontSize: '12px', textAlign: 'center'}}
            size="sm" as="input" placeholder={'Go to'}
            onFocus={() => event.target.placeholder=''}
            onBlur={() => event.target.placeholder='Go to'}
            onKeyPress={() => {
              if (event.key === 'Enter') {
                const page = Number(event.target.value);
                if (page >= 1 && page <= props.maxPageNum) {
                  event.target.value = '';
                  props.pageGo(page-1);
                }
              }
            }}
          />
        </Form>&nbsp;
        <Button onClick={props.canvasToggle} variant="light">
          <i className="fas fa-filter"></i>{' '}
          Filter
        </Button>
        <Add refreshPage={props.refreshPage} displayAlert={props.displayAlert} />
        <Dropdown id="user-dropdown" navbar={true} drop="left">
          <Dropdown.Toggle as={CustomToggle}>
            <i className="fas fa-ellipsis-h"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {props.signIn.loggedIn ? logOut : logIn}
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}


Header.propTypes = { 
  signIn: PropTypes.object.isRequired,
  canvasToggle: PropTypes.func.isRequired,
  refreshPage: PropTypes.func.isRequired,
  iFilter: PropTypes.func.isRequired,
  displayAlert: PropTypes.func.isRequired,
};


export default Header;
