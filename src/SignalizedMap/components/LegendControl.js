import React from "react";
import ReactDOM from "react-dom";
import L from "leaflet";
import { MapControl, withLeaflet } from "react-leaflet/lib";

class LegendControl extends MapControl {
  // note we're extending MapControl from react-leaflet, not Component from react

  createLeafletElement() {
    const centerControl = L.control({ position: "bottomleft" }); // see http://leafletjs.com/reference.html#control-positions for other positions
    const jsx = (
      // PUT YOUR JSX FOR THE COMPONENT HERE:
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

    centerControl.onAdd = map => {
      let div = L.DomUtil.create("div", "");
      ReactDOM.render(jsx, div);
      return div;
    };

    centerControl.onRemove = () => {};

    this.leafletElement = centerControl;
    return this.leafletElement;
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    this.leafletElement.addTo(map);
  }
}

export default withLeaflet(LegendControl);
