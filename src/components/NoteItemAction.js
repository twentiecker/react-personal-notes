import React from "react";
import { Button } from "react-bootstrap";

function NoteItemAction({ id, onDelete, onArchive, archive }) {
  return (
    <div className="note-item__action">
      <Button
        variant="outline-danger"
        className="note-item__delete-button me-2 my-1"
        onClick={() => onDelete(id)}
      >
        <span className="material-icons">delete_outline</span>
      </Button>
      <Button
        variant="outline-success"
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {archive}
      </Button>
    </div>
  );
}

export default NoteItemAction;
