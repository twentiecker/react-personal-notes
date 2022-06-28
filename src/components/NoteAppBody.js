import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
import NotesListEmptyMessage from "./NotesListEmptyMessage";
import { Tab, Nav, Col, Row } from "react-bootstrap";

function NoteAppBody({
  onAddNote,
  notes,
  archivedNotes,
  onDelete,
  onArchive,
  onUnArchive,
  onDeleteArchive,
}) {
  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      <br />
      <br />
      <br />
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <div className="tab-menu">
                    <span className="material-icons">notes</span>
                    <span>
                      <strong>Catatan Aktif </strong>
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <div className="tab-menu">
                    <span className="material-icons">beenhere</span>
                    <span>
                      <strong>Arsip</strong>
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {notes.length !== 0 ? (
                  <NotesList
                    notes={notes}
                    archive={<span className="material-icons">done</span>}
                    onDelete={onDelete}
                    onArchive={onArchive}
                  />
                ) : (
                  <NotesListEmptyMessage />
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {archivedNotes.length !== 0 ? (
                  <NotesList
                    notes={archivedNotes}
                    archive={
                      <span className="material-icons">rotate_left</span>
                    }
                    onDelete={onDeleteArchive}
                    onArchive={onUnArchive}
                  />
                ) : (
                  <NotesListEmptyMessage />
                )}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default NoteAppBody;
