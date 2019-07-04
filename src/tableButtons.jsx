import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';


export default function tableButtons(
  selectAll, selectToDeleteAll, cancelSelectToDeleteAll, issues, cancelAll
) {
  const displayTable = (
    <Button title="Edit all rows" onClick={selectAll}
            variant="success" size="sm">
      <i className="far fa-check-square"></i>
    </Button>
  );
  
  const selectDel = (
    <Button title="Mark selected for deletion" onClick={selectToDeleteAll}
            variant="light" size="sm">
       <i className="far fa-trash-alt"></i>
    </Button>
  );
  
  const cancelDel = (
    <Button title="Cancel deletion of selected" onClick={cancelSelectToDeleteAll}
            variant="danger" size="sm">
       <i className="far fa-trash-alt"></i>
    </Button>
  );
 
  const ids = Object.keys(issues);
  const allSelectedDelete = ids.every(id => issues[id].selected !== 'delete');
  
  const editTable = (
    <ButtonToolbar>
      <Button type="submit" title="Save & submit changes"
              variant="success" size="sm">
        <i className="far fa-save"></i>
      </Button>
      &nbsp;&nbsp;
      {allSelectedDelete ? cancelDel : selectDel}
      &nbsp;&nbsp;
      <Button title="Cancel all selected" onClick={cancelAll}
              variant="secondary" size="sm">
        <i className="fas fa-ban"></i>
      </Button>
    </ButtonToolbar>
  );

  return { displayTable, editTable }

}

