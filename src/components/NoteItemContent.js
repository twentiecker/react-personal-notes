import React from "react";
import { showFormattedDate } from "../utils/index";
import { Card } from "react-bootstrap";
import NoteItemAction from "./NoteItemAction";

function NoteItemContent({
  title,
  createdAt,
  body,
  id,
  archive,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item__content">
      <Card border="secondary" style={{ height: "20rem" }}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{showFormattedDate(createdAt)}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <NoteItemAction
            id={id}
            archive={archive}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default NoteItemContent;
