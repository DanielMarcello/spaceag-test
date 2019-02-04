import React, { Component } from "react";

import "../css/Legend.css";

class Legend extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="legendContentRow">
          <div className="colorValue" style={{ backgroundColor: "blue" }} />
          <p className="valueDescription">
            Menor o igual que <b>2</b>
          </p>
        </div>
        <div className="legendContentRow">
          <div className="colorValue" style={{ backgroundColor: "green" }} />
          <p className="valueDescription">
            Mayor que <b>2</b> y menor o igual que <b>4</b>
          </p>
        </div>
        <div className="legendContentRow">
          <div className="colorValue" style={{ backgroundColor: "yellow" }} />
          <p className="valueDescription">
            Mayor que <b>4</b> y menor o igual que <b>6</b>
          </p>
        </div>
        <div className="legendContentRow">
          <div className="colorValue" style={{ backgroundColor: "red" }} />
          <p className="valueDescription">
            Mayor que <b>6</b>
          </p>
        </div>
      </div>
    );
  }
}

export default Legend;
