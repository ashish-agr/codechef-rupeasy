import React, { Component } from "react";

import { Container } from "reactstrap";
import { Routes } from "./Routes";
import ResourceBar from "./views/components/ResourceBar";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Routes />
        <ResourceBar />
      </Container>
    );
  }
}

export default App;
