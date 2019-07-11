// RowSelect.jsx

import React                         from 'react';
import PropTypes                     from 'prop-types';
import { BeingEdited, BeingDeleted } from './RowSelEdDel.jsx';


const RowSelect = props => {
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

RowSelect.propTypes = {
  issue: PropTypes.object.isRequired,
  deleteSingleRow: PropTypes.func.isRequired,
  cancelSingleRow: PropTypes.func.isRequired,
};


export default RowSelect;
