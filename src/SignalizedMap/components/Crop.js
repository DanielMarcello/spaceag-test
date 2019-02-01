import React, { Component } from "react";

import { Polygon } from "react-leaflet/lib";

class Crop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  changeLatLngPosition = data => {
    data = data[0];
    var res = [];
    data.forEach(latlng => {
      res.push([latlng[1], latlng[0]]);
    });
    return res;
  };

  setFillColor = values => {
    var value = values.length > 0 ? values[0].value : null;
    if (values.length > 0) {
      if (value <= 2) return "blue";
      if (value > 2 && value <= 4) return "green";
      if (value > 4 && value <= 6) return "yellow";
      if (value > 6) return "red";
    } else return "transparent";
  };

  render() {
    var { values } = this.props.feature.properties;
    var { coordinates } = this.props.feature.geometry;
    return (
      <Polygon
        color="white"
        fillColor={this.setFillColor(values)}
        fillOpacity={1}
        weight={1}
        positions={this.changeLatLngPosition(coordinates)}
      />
    );
  }
}

export default Crop;
