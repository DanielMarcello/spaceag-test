import { MapControl } from "react-leaflet/lib";
import L from "leaflet";

export default class Legend extends MapControl {
  constructor(props) {
    super(props);

    this.state = {};
  }

  createLeafletElement(opts) {
    const Legend = L.Control.extend({
      onAdd: map => {
        this.panelDiv = L.DomUtil.create("div", "info");
        return this.panelDiv;
      }
    });
    return new Legend({ position: "bottomleft" });
  }
}
