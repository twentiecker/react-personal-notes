import React from "react";
import { Form, InputGroup } from "react-bootstrap";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      keyword: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.props.onSearch(event.target.value);
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="note-search">
        <InputGroup className="me-5 py-3">
          <InputGroup.Text id="basic-addon1">
            <span className="material-icons">search</span>
          </InputGroup.Text>
          <Form.Control
            placeholder="Cari catatan ..."
            value={this.state.keyword}
            onChange={this.onSearchChangeEventHandler}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    );
  }
}

export default NoteSearch;
