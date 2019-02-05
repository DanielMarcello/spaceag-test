import React, { Component } from "react";

import { Polygon, Popup } from "react-leaflet/lib";

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

  parsetoDatatype = (type, data) => {
    switch (type) {
      case "float":
        return data.toFixed(2);
      default:
        return data;
    }
  };

  render() {
    var { unit, values } = this.props.feature.properties;
    var { coordinates } = this.props.feature.geometry;
    var { measurement_unit, data_type } = this.props.setup;
    return (
      <Polygon
        color="white"
        fillColor={this.setFillColor(values)}
        fillOpacity={1}
        weight={1}
        positions={this.changeLatLngPosition(coordinates)}
      >
        <Popup>
          <h2>
            {values.length > 0
              ? `${this.parsetoDatatype(
                  data_type,
                  values[0].value
                )} ${measurement_unit}`
              : "Sin Datos"}
          </h2>
          <h3>{unit.full_name}</h3>
          <p>
            Variedad {unit.state.variety.length > 0 ? unit.state.variety : ""}
          </p>
          <p>
            Año{" "}
            {unit.state.year_of_planting.length > 0
              ? unit.state.year_of_planting
              : ""}
          </p>
          <p>Area {unit.state.area ? unit.state.area : ""} Ha</p>
        </Popup>
      </Polygon>
    );
  }
}

export default Crop;
