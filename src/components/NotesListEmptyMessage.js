import React from "react";

function NotesListEmptyMessage() {
  return (
    <p className="notes-list__empty-message">
      <span className="material-icons">event_busy</span>
      <span>Tidak ada catatan</span>
    </p>
  );
}

export default NotesListEmptyMessage;
