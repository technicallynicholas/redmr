import React from "react";
import "./App.css";
import OutletTable from "./components/OutletTable";
import { Container } from "semantic-ui-react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <OutletTable />
        <OutletTable />
      </Container>
    </div>
  );
}

export default App;
