// Row.jsx

import React     from 'react';
import PropTypes from 'prop-types';
import RowNormal from './RowNormal.jsx';
import RowSelect from './RowSelect.jsx';


function Row(props) {
  const selected = props.issue.selected;

  const rowNormal = (
    <RowNormal 
      issue={props.issue} 
      signIn={props.signIn}
      selectSingleRow={props.selectSingleRow} 
    /> 
  );

  const rowSelect = (
    <RowSelect 
      issue={props.issue} 
      cancelSingleRow={props.cancelSingleRow}
      deleteSingleRow={props.deleteSingleRow}
      selectSingleRow={props.selectSingleRow}
    />
  );

  return (
    selected ? rowSelect : rowNormal
  );
};


Row.propTypes = {
  issue: PropTypes.object.isRequired,
  signIn: PropTypes.object.isRequired,
  selectSingleRow: PropTypes.func.isRequired,
  cancelSingleRow: PropTypes.func.isRequired,
  deleteSingleRow: PropTypes.func.isRequired,
};


export default Row;
