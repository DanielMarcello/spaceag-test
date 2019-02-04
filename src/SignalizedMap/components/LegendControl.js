import React from "react";
import ReactDOM from "react-dom";
import L from "leaflet";
import { MapControl, withLeaflet } from "react-leaflet";

class LegendControl extends MapControl {
  // note we're extending MapControl from react-leaflet, not Component from react

  createLeafletElement() {
    const centerControl = L.control({ position: "bottomright" }); // see http://leafletjs.com/reference.html#control-positions for other positions
    const jsx = (
      // PUT YOUR JSX FOR THE COMPONENT HERE:
      <div {...this.props}>
        <li>asd</li>
        <li>asd</li>
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
