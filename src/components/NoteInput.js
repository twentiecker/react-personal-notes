import React from "react";
import NoteInputTitleCharLimit from "./NoteInputTitleCharLimit";
import { Form, Button, InputGroup } from "react-bootstrap";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      title: "",
      body: "",
      count: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      if (event.target.value.length > 50) {
        return;
      }

      return {
        title: event.target.value,
        count: 50 - event.target.value.length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <br />
        <br />
        <br />
        <h2>Buat Catatan</h2>
        <Form onSubmit={this.onSubmitEventHandler}>
          <NoteInputTitleCharLimit count={this.state.count} />
          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <span className="material-icons">title</span>
              </InputGroup.Text>
              <Form.Control
                placeholder="Ini adalah judul ..."
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <span className="material-icons">note</span>
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                placeholder="Tuliskan catatanmu di sini ..."
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler}
                required
              />
            </InputGroup>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              <strong>BUAT</strong>
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default NoteInput;
