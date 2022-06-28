import React from "react";
import NoteItem from "./NoteItem";
import { Row, Col } from "react-bootstrap";

function NotesList({ notes, archive, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      <Row xs={1} md={2} className="g-4">
        {notes.map((note) => (
          <Col key={note.id}>
            <NoteItem
              {...note}
              id={note.id}
              archive={archive}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default NotesList;
