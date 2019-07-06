// Row.jsx

import React     from 'react';
import PropTypes from 'prop-types';
import RowNormal from './RowNormal.jsx';
import RowEdit   from './RowEdit.jsx';


const Row = props => {
  const selected = props.issue.selected;

  const rowNormal = (
    <RowNormal 
      issue={props.issue} 
      selectSingleRow={props.selectSingleRow} 
    /> 
  );

  const rowEdit = (
    <RowEdit 
      issue={props.issue} 
      cancelSingleRow={props.cancelSingleRow}
      deleteSingleRow={props.deleteSingleRow}
      selectSingleRow={props.selectSingleRow}
    />
  );

  return (
    selected ? rowEdit : rowNormal
  );
};


Row.propTypes = {
  issue: PropTypes.object.isRequired,
  selectSingleRow: PropTypes.func.isRequired,
  cancelSingleRow: PropTypes.func.isRequired,
  deleteSingleRow: PropTypes.func.isRequired,
};


export default Row;
