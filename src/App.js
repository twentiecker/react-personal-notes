import React from "react";
import "./App.css";
import { getInitialData } from "./utils/index";
import NoteAppBody from "./components/NoteAppBody";
import NoteAppHeader from "./components/NoteAppHeader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.archivedNotes = [];
    this.searchedNotes = [];
    this.searchedArchivedNotes = [];
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandlerArchived = this.onDeleteHandlerArchived.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    if (
      title.includes(this.state.searchKeyword) &&
      this.state.searchKeyword !== ""
    ) {
      this.searchedNotes.push({
        id: +new Date(),
        title,
        body,
        createdAt: new Date(),
        archived: false,
      });
    }
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: notes,
      };
    });

    // if (this.archivedNotes.length !== 0) {
    //   const note = this.archivedNotes.filter((note) => note.id === id);
    //   this.archivedNotes.splice(this.archivedNotes.indexOf(note[0]), 1);
    // }

    if (this.searchedNotes.length !== 0) {
      const note = this.searchedNotes.filter((note) => note.id === id);
      this.searchedNotes.splice(this.searchedNotes.indexOf(note[0]), 1);
    }
  }

  onDeleteHandlerArchived(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: notes,
      };
    });

    if (this.archivedNotes.length !== 0) {
      const note = this.archivedNotes.filter((note) => note.id === id);
      this.archivedNotes.splice(this.archivedNotes.indexOf(note[0]), 1);
    }

    if (this.searchedArchivedNotes.length !== 0) {
      const note = this.searchedArchivedNotes.filter((note) => note.id === id);
      this.searchedArchivedNotes.splice(
        this.searchedArchivedNotes.indexOf(note[0]),
        1
      );
    }
  }

  onArchiveHandler(id) {
    const archive = this.state.notes.filter((note) => note.id === id);
    this.archivedNotes.push(archive[0]);
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState((prevState) => {
      return {
        ...prevState,
        notes: notes,
      };
    });

    if (this.searchedNotes.length !== 0) {
      const searchArchive = this.searchedNotes.filter((note) => note.id === id);
      this.searchedNotes.splice(
        this.searchedNotes.indexOf(searchArchive[0]),
        1
      );
      this.searchedArchivedNotes.push(searchArchive[0]);
    }
  }

  onUnArchiveHandler(id) {
    const note = this.archivedNotes.filter((note) => note.id === id);
    this.archivedNotes.splice(this.archivedNotes.indexOf(note[0]), 1);

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, note[0]],
      };
    });

    if (this.searchedArchivedNotes.length !== 0) {
      const searchNote = this.searchedArchivedNotes.filter(
        (note) => note.id === id
      );
      this.searchedArchivedNotes.splice(
        this.searchedArchivedNotes.indexOf(searchNote[0]),
        1
      );
      this.searchedNotes.push(searchNote[0]);
    }
  }

  onSearchHandler(keyword) {
    this.searchedNotes = [];
    this.searchedArchivedNotes = [];

    for (const note of [...this.state.notes]) {
      if (note.title.toLowerCase().includes(keyword.toLowerCase())) {
        this.searchedNotes.push(note);
      }
    }

    for (const note of [...this.archivedNotes]) {
      if (note.title.toLowerCase().includes(keyword.toLowerCase())) {
        this.searchedArchivedNotes.push(note);
      }
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        searchKeyword: keyword,
      };
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
        {this.state.searchKeyword ? (
          <NoteAppBody
            notes={this.searchedNotes}
            archivedNotes={this.searchedArchivedNotes}
            onUnArchive={this.onUnArchiveHandler}
            onAddNote={this.onAddNoteHandler}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            onDeleteArchive={this.onDeleteHandlerArchived}
          />
        ) : (
          <NoteAppBody
            notes={this.state.notes}
            archivedNotes={this.archivedNotes}
            onUnArchive={this.onUnArchiveHandler}
            onAddNote={this.onAddNoteHandler}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            onDeleteArchive={this.onDeleteHandlerArchived}
          />
        )}
      </>
    );
  }
}

export default App;
