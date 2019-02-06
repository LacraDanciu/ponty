import React, { Component } from "react";
import Routes from "./routes";

class App extends Component {

  componentDidMount() {
    console.log('app');
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
