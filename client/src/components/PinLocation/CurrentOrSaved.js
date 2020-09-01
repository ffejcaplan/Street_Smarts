import React, { useContext } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';

export default function CurrentOrSaved() {
  const { currentLocation, chooseSaved, chooseCurrentLocation } = useContext(
    LocationGlobalContext
  );

  return (
    <div id="selectDiv">
      <h3 style={{ textAlign: 'center', marginTop: '10px' }}>
        Would You Like to Choose A Saved Location or Pin Your Current Location?
      </h3>
      <div
        className="col-sm-6"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '40px',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <button
          className="btn btn-primary"
          style={{ width: '50%', margin: 'auto', marginBottom: '10px' }}
          value="locationtable"
          onClick={chooseSaved}
        >
          Choose A Saved Location{' '}
        </button>{' '}
        <br />
        or
        <br />
        <button
          className="btn btn-primary"
          style={{ width: '50%', margin: 'auto', marginTop: '10px' }}
          value="currentlocation"
          location={currentLocation}
          onClick={chooseCurrentLocation}
        >
          Pin Current Location
        </button>
      </div>
    </div>
  );
}
