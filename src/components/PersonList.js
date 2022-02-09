import React, { Component } from "react";
import APi from '../api'
class PersonList extends Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    APi.get("users").then((response) => {
      const persons = response.data;
      this.setState({ persons });
    });
  }
  render() {
    return <div>
        <ul>
            {
                this.state.persons.map(
                    person =><li key={person.id}>{person.name}</li>
                )
            }
        </ul>
    </div>;
  }
}

export default PersonList;
