import React, { Component } from "react";
import Crop from "./components/Crop";
import Legend from "./components/Legend";
import LegendControl from "./components/LegendControl";

import "./css/SignalizedMap.css";

import { Map, ZoomControl, TileLayer } from "react-leaflet/lib";
import "react-leaflet-fullscreen-control";

import jsonMapData from "./data/multifrut__calsa__arandanos__dias_sin_cosechar__2018_12_10.json";

class SignalizedMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialCoords: {
        lat: -78.6143658646649,
        lng: -8.587349402973743,
        zoom: 16
      },
      mapData: {}
    };
  }

  componentWillMount() {
    var mapData = jsonMapData;
    this.setState({ mapData });
  }

  render() {
    return (
      <div className="relative">
        <Map
          className="Map"
          center={[this.state.initialCoords.lng, this.state.initialCoords.lat]}
          zoom={this.state.initialCoords.zoom}
          zoomControl={false}
          fullscreenControl={{ position: "bottomright" }}
        >
          <ZoomControl position="bottomright" />
          <TileLayer
            attribution="Tiles &amp;copy; Esri &amp;mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {this.state.mapData.features.map(item => (
            <Crop
              key={item.properties.unit.id}
              feature={item}
              setup={this.state.mapData.setup}
            />
          ))}
          <LegendControl className="legendControl" />
        </Map>
        {/* <Legend className="absolute legendControl" /> */}
        {/* <FullSizeMap className="absolute fullSizeMap" /> */}
      </div>
    );
  }
}

export default SignalizedMap;
