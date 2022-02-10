import React from "react";
import axios from "axios";

export default class FlowRemove extends React.Component {
  state = {
    id: "",
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(
        `http://127.0.0.1:8000/marketing/automatedflows/?id=${this.state.id}`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Flow ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
