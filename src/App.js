import React, { Component } from "react";
import "./App.css";

import HomePage from "./pages/homepage.content";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
