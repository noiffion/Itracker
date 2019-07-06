// RowEdit.jsx

import React                         from 'react';
import PropTypes                     from 'prop-types';
import { NumInput, DateInput }       from './ValidInput.jsx';
import { BeingEdited, BeingDeleted } from './RowEdDel.jsx';


const RowEdit = props => {
/*
  onChange(event, convertedValue) {
    const issue = Object.assign({}, state.issue);
    const value = (convertedValue !== undefined) ? convertedValue : event.target.value;
    issue[event.target.name] = value;
    setState({ issue });
  }

  onValidityChange(event, valid) {
    const invalidFields = Object.assign({}, state.invalidFields);
    if (!valid) {
      invalidFields[event.target.name] = true;
    } else {
      delete invalidFields[event.target.name];
    }
    setState({ invalidFields });
  }

  const noInvalidFields = Object.keys(state.invalidFields).length === 0;
  const msg = (<div className="error">Please correct invalid fields before submitting.</div>);
  const validationMessage =  noInvalidFields ?  null : msg;
*/
  const del = props.issue.selected === 'delete';

  const beingEdited = (
    <BeingEdited
      iss={props.issue}
      deleteSingleRow={props.deleteSingleRow}
      cancelSingleRow={props.cancelSingleRow}
    />
  );

  const beingDeleted = (
    <BeingDeleted 
      iss={props.issue}
      cancelDelete={props.selectSingleRow}
      cancelSingleRow={props.cancelSingleRow}
    />
  );

  return del ? beingDeleted : beingEdited;

}

RowEdit.propTypes = {
  issue: PropTypes.object.isRequired,
  deleteSingleRow: PropTypes.func.isRequired,
  cancelSingleRow: PropTypes.func.isRequired,
};


export default RowEdit;
