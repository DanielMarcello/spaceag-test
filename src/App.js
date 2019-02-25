import React, { Component } from "react";
import "./App.css";

import SignalizedMap from "./SignalizedMap/SignalizedMap.js";
import AppHeader from "./Header/AppHeader.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainData: {
        Crops: [
          {
            id: 11,
            organization: "Multifrut",
            farm: [{ id: 1, name: "Calsa" }],
            crop: [{ id: 1, name: "Arándano" }]
          },
          {
            id: 81,
            organization: "Valle y Pampa",
            farm: [{ id: 1, name: "Pampa California Bup" }],
            crop: [{ id: 1, name: "Granada" }]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="App">
        <AppHeader cropsData={this.state.mainData} />
        <SignalizedMap />
      </div>
    );
  }
}

export default App;
