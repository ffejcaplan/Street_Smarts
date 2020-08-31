import React, { useContext, useState, useEffect } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function PinCurrentLocation(props) {
  const { currentLocation, backPinLocation } = useContext(
    LocationGlobalContext
  );

  //   useEffect(() => {
  //     console.log(currentLocation);
  //   });
  console.log(props.location);

  return (
    <>
      <button className="btn btn-primary" onClick={backPinLocation}>
        Back
      </button>
      {/* {currentLocation && (
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiZmZlamNhcDUiLCJhIjoiY2tlMzBqem9rMGVmcDJ0cDhwNjdyeHJiNiJ9.EJrCDgJEG_jROwOWwyWMMw"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
          mapStyle="mapbox://styles/ffejcap5/cke8wj61j5gh91atb9cwiygp8"
        ></ReactMapGL> */}
      {/* )} */}
    </>
  );
}
