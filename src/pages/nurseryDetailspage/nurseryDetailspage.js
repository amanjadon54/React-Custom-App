import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import DrawControl from 'react-mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import Header from 'components/Header';
import css from './nurseryDetailspage.css';

const TOKEN =
  'pk.eyJ1IjoiaGFybWVldDI3IiwiYSI6ImNqdm1qbzZicDBucW8zenZuMTRuZ3EzYWYifQ.CDX5jnCxNLxArEefBXx2dw';

const Map = new ReactMapboxGl({
  accessToken: TOKEN
});

class nurseryDetailspage extends React.Component {
  onDrawCreate = ({ features }) => {
    console.log(features);
  };

  onDrawUpdate = ({ features }) => {
    console.log({ features });
  };

  render() {
    return (
      <div className={css.root}>
        <div>
          <Header pageTitle="Nursery Details" />
        </div>
        <Map
          style="mapbox://styles/mapbox/satellite-v9" // eslint-disable-line
          containerStyle={{
            margin: '5px',
            height: '50vh',
            width: '50vw'
          }}
        >
          <DrawControl
            position="top-left"
            onDrawCreate={this.onDrawCreate}
            onDrawUpdate={this.onDrawUpdate}
          />
        </Map>
      </div>
    );
  }
}

export default nurseryDetailspage;
