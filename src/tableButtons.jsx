import React                     from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';


export default function tableButtons(issues, selectAll, selectDelAll, unSelectDelAll, cancelAll) {
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
 
  const ids = Object.keys(issues);
  const selected = ids.filter(id => issues[id].selected);
  const allSelectedDelete = selected.every(id => issues[id].selected === 'delete');
  
  const editTable = (
    <ButtonToolbar>
      <Button type="submit" title="Submit"
              variant="primary" size="sm">
        <i className="far fa-save"></i>
      </Button>
      &nbsp;&nbsp;
      {allSelectedDelete ? cancelDel : selectDel}
      &nbsp;&nbsp;
      <Button title="Cancel all" onClick={cancelAll}
              variant="secondary" size="sm">
        <i className="fas fa-ban"></i>
      </Button>
    </ButtonToolbar>
  );

  return { displayTable, editTable }

}
