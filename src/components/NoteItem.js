import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  archive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        createdAt={createdAt}
        body={body}
        id={id}
        archive={archive}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;
