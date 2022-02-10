import "./App.css";
import AddFlow from './components/createFlow';
import UpdateFlow from './components/updateFlow';
import CustomerList from './components/customerData';
import FlowRemove from "./components/removeFlow";
// import PersonAdd from "./components/createPerson";
// import PersonList from "./components/PersonList";
// import PersonRemove from "./components/PersonRemove";

function App() {
  return (
    <div className="App">
      <AddFlow />
      <FlowRemove />
      <UpdateFlow />
      <CustomerList />
      {/* <PersonRemove /> */}
      {/* <PersonAdd /> */}
      {/* <PersonList /> */}
    </div>
  );
}

export default App;
