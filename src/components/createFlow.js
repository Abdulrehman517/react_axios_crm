import React, { Component } from "react";
import axios from "axios";

class AddFlow extends Component {
  state = {
    flow_data: {
      name: "flow6",
      description: "flow6 description",
      status: true,
      isAll: true,
      trigger: "trigger",
      flow_conditions: [
        {
          name: "status",
          operator: "equal_to",
          value: "active",
          type: "add",
        }
      ],
      flow_actions: [
        {
          name: "action added 6",
          position: 0,
          type: "add",
        },
      ],

    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const flow_data = this.state.flow_data

    axios.post("http://127.0.0.1:8000/marketing/automatedflows", this.state.flow_data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  render() {
    return (
      <>
        <button type="submit" onClick={this.handleSubmit} name="automatedFlows">
          Add Flow
        </button>
      </>
    );
  }
}

export default AddFlow;
