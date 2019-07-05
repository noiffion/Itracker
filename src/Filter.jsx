// Filter.jsx

import React          from 'react';
import PropTypes      from 'prop-types';
import Row            from 'react-bootstrap/Row';
import Col            from 'react-bootstrap/Col';
import Card           from 'react-bootstrap/Card';
import Form           from 'react-bootstrap/Form';
import Button         from 'react-bootstrap/Button';
import Collapse       from 'react-bootstrap/Collapse';
import Dropdown       from 'react-bootstrap/Dropdown';
import InputGroup     from 'react-bootstrap/InputGroup';
import ButtonGroup    from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Filter = props => {
  const 
  constructor(props) {
    super(props);
    this.state = {
      sts: '',
      effort_gte: '',
      effort_lte: '',
      opened: false, 
    };
    this.onChangeSts = this.onChangeSts.bind(this);
    this.onChangeEffortGte = this.onChangeEffortGte.bind(this);
    this.onChangeEffortLte = this.onChangeEffortLte.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  onChangeSts(e) {
    this.setState({ sts: e.target.value });
  }
 
  onChangeEffortGte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_gte: e.target.value });
    }
  }
 
  onChangeEffortLte(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effort_lte: e.target.value });
    }
  }
 
  applyFilter() {
    const newFilter = {};
    if (this.state.sts) newFilter.sts = this.state.sts;
    if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
    if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
    this.props.iFilter(newFilter);
  }
 
  resetFilter() {
    this.props.iFilter({});
  }
 
  clearFilter() {
    this.setState({
      sts: this.props.query.sts || '',
      effort_gte: this.props.query.effort_gte || '',
      effort_lte: this.props.query.effort_lte || '',
    });
  }
  
  render() {
    return (
      <Card id="filterCard">
        <Card.Header id="filteReset">
          <Button onClick={() => this.setState({ opened: !(this.state.opened) })} 
                  aria-controls="filter-collapse" aria-expanded={this.state.opened}>
            Filter 
          </Button>&nbsp;&nbsp;
          <Button variant="info" onClick={this.resetFilter}
                  disabled={this.props.query === ''}>
            Reset
          </Button>
        </Card.Header>
        <Card.Body>
          <Collapse in={this.state.opened}>
            <Form name="filterCollapse">
              <Form.Group as={Row} id="stateFilter">
                <Form.Label column sm={2}> State: </Form.Label>
                <Col>
                  <Form.Control as="select" value={this.state.sts} 
                                onChange={this.onChangeSts} size="sm">
                    <option>(Any)</option>
                    <option>New</option>
                    <option>Open</option>
                    <option>Assigned</option>
                    <option>Fixed</option>
                    <option>Verified</option>
                    <option>Closed</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} id="effort">
                  <Form.Label column sm={2}> Effort: </Form.Label>
                  <Col>
                    <InputGroup size="sm">
                      <Form.Control as="input" value={this.state.effort_gte} 
                                    onChange={this.onChangeEffortGte} placeholder="from" />
                       <InputGroup.Append> 
                         <InputGroup.Text>―</InputGroup.Text>
                       </InputGroup.Append>
                      <Form.Control as="input" value={this.state.effort_lte} 
                                    onChange={this.onChangeEffortLte} placeholder="to" />
                    </InputGroup>
                  </Col>
              </Form.Group>
              <Form.Group>
                <ButtonGroup size="sm" aria-label="Filter_buttons" id="applyClear">
                  <Button onClick={this.applyFilter}>
                    Apply
                  </Button>&nbsp;
                  <Button variant="info" onClick={this.clearFilter}>
                    Clear 
                  </Button>
                </ButtonGroup>
              </Form.Group>
            </Form>
          </Collapse>
        </Card.Body>
      </Card>
    );
  }
}


export default withrouter(Filter);

Filter.propTypes = {
  iFilter: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
} ;
