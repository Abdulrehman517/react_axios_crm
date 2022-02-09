import React, { Component } from "react";
import axios from "axios";

class CustomerList extends Component {
  state = {
    customers: [],
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/marketing/automatedflows")
      .then((response) => {
        const customers = response.data;
        console.log(response);
        this.setState({ customers });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.customers.map((customer) => (
            <>
            <h1>Automated Flows</h1>
              <li key={customer.id}>{customer.name}</li>
              <li key={customer.id}>{customer.description}</li>
              <li key={customer.id}>{customer.status.toString()}</li>
              <li key={customer.id}>{customer.isAll.toString()}</li>
              <ul>
                  <h2>Flow Action:</h2>
                  {customer.flow_actions.map(action =>
                  <>
                  <li>{action.name}</li>
                  <li>{action.position}</li>
                  </>
                    )}
              </ul>
              <ul>
                <h2>Flow Conditions</h2>
                {customer.flow_conditions.map(condition =>
                <>
                <li>{condition.name}</li>
                </>
                  )}
              </ul>
            </>
          ))}
        </ul>
                
      </div>
    );
  }
}

export default CustomerList;
