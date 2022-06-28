import React from "react";
import NoteSearch from "./NoteSearch";
import { Navbar, Container, Nav } from "react-bootstrap";

function NoteAppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            Notes<strong>App</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0"></Nav>
            <NoteSearch onSearch={onSearch} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NoteAppHeader;
