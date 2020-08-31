import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function PinLocation() {
  //   const { latitude, longitude, error } = usePosition();
  //   useEffect(() => {
  // 1. get list of locations from location table
  // 2. get current location and pin on map
  const { setLocation } = useContext(PosGlobalContext);

  let viewport = {
    longitude: '',
    latitude: '',
    locationId: '',
    locationNickname: '',
    zoom: 3,
    width: '50vw',
    height: '50vh',
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      viewport.longitude = position.coords.longitude;
      viewport.latitude = position.coords.latitude;
      // });
      console.log(viewport);
    });
  }, []);

  return <></>;
}

// return (
//   <ReactMapGL
//     {...viewport}
//     mapboxApiAccessToken="pk.eyJ1IjoiZmZlamNhcDUiLCJhIjoiY2tlMzBqem9rMGVmcDJ0cDhwNjdyeHJiNiJ9.EJrCDgJEG_jROwOWwyWMMw"
//     mapStyle="mapbox://styles/ffejcap5/cke8wj61j5gh91atb9cwiygp8"
//   ></ReactMapGL>
// );
