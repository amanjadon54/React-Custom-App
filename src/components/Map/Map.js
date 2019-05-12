import React, { Component } from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';

const TOKEN =
  'pk.eyJ1IjoiaGFybWVldDI3IiwiYSI6ImNqdW5vNmJyOTJrejQzeXBndWljNzlmN3kifQ.6j6r0fh3jRDIvKSkXr31ag';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 300,
        height: 300
      }
    };
  }

  render() {
    const { viewport } = this.state;
    return (
      <MapGL {...viewport} mapStyle="mapbox://styles/mapbox/dark-v9" mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
    );
  }
}
