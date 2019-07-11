import React       from 'react';
import Button      from 'react-bootstrap/Button';


export default function tableButtons(issues, selectAll, 
  selectDelAll, unSelectDelAll, cancelAll, submitChanges) {
  const displayTable = (
    <Button title="Edit all rows" onClick={selectAll}
            variant="success" size="sm">
      <i className="far fa-check-square"></i>
    </Button>
  );
  
  const selectDel = (
    <Button title="Mark selected for deletion" onClick={selectDelAll}
            variant="light" size="sm">
       <i className="far fa-trash-alt"></i>
    </Button>
  );
  
  const cancelDel = (
    <Button title="Cancel deletion of selected" onClick={unSelectDelAll}
            variant="danger" size="sm">
       <i className="far fa-trash-alt"></i>
    </Button>
  );
 
  const selected = issues.filter(issue => issue.selected);
  const allSelectedDelete = selected.every(issue => issue.selected === 'delete');
  
  const editTable = (
    <React.Fragment>
      <Button type="submit" title="Submit" onClick={submitChanges}
              variant="primary" size="sm">
        <i className="far fa-save"></i>
      </Button>
      &nbsp;
      {allSelectedDelete ? cancelDel : selectDel}
      &nbsp;
      <Button title="Cancel all" onClick={cancelAll}
              variant="secondary" size="sm">
        <i className="fas fa-ban"></i>
      </Button>
    </React.Fragment>
  );

  return { displayTable, editTable }

}
