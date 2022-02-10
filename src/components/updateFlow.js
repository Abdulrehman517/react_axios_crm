import React, { Component } from "react";
import axios from "axios";

class UpdateFlow extends Component {
    state = {
        flow_data: {
            id: 4,
            name: "flow6---updated",
            description: "flow6 description--updated",
            status: true,
            isAll: true,
            trigger: "trigger--updaetd",
            flow_conditions: [
                {
                    id: 4,
                    name: "status--updated",
                    operator: "equal_to--updated",
                    value: "active",
                    type: "edit",
                }
            ],
            flow_actions: [
                {
                    id :4,
                    name: "action added 6---updated",
                    position: 0,
                    type: "edit",
                },
            ],

        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // const flow_data = this.state.flow_data

        axios.put("http://127.0.0.1:8000/marketing/automatedflows", this.state.flow_data).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    };
    render() {
        return (
            <>
                <button type="submit" onClick={this.handleSubmit} name="automatedFlows">
                    Update Flow
                </button>
            </>
        );
    }
}

export default UpdateFlow;
