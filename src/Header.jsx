// Header.jsx

import React          from 'react';
import PropTypes      from 'prop-types';
import Nav            from 'react-bootstrap/Nav';
import Form           from 'react-bootstrap/Form';
import Button         from 'react-bootstrap/Button';
import Navbar         from 'react-bootstrap/Navbar';
import Dropdown       from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { 
  OffCanvas,
  OffCanvasMenu,
  OffCanvasBody
}                     from 'react-offcanvas';
import Add            from './Add.jsx';
import AlertMsg       from './AlertMsg.jsx';



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


const Header = props => {
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


Header.propTypes = { 
  canvasToggle: PropTypes.func.isRequired,
  refreshPage: PropTypes.func.isRequired,
  iFilter: PropTypes.func.isRequired,
};


export default Header;
