import React, { Component } from "react";
import "./App.css";

import SignalizedMap from "./SignalizedMap/SignalizedMap.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SignalizedMap />
        </header>
      </div>
    );
  }
}

export default App;
