import React from 'react';
import { Marker } from 'react-map-gl';

import LocationsAPI from '../../utils/LocationsAPI';

export default function MapMarker() {
  const getLocation = async () => {
    const activeTruck = await LocationsAPI.findActive();
    if (activeTruck) {
      return (
        <Marker
          key={parseInt(activeTruck.data[0].id)}
          latitude={parseFloat(activeTruck.data[0].latitude)}
          longitude={parseFloat(activeTruck.data[0].longitude)}
        ></Marker>
      );
    } else {
      return <p>hello</p>;
    }
  };

  getLocation();
}
