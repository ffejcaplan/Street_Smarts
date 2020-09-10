import React, { useContext, useEffect } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';
import { Link } from 'react-router-dom';

export default function PinButton() {
  const { resetPin, pinnedStatus } = useContext(LocationGlobalContext);

  // if (pinnedStatus === true) {
  //   togglePin();
  // }

  if (pinnedStatus === true) {
    return (
      <button className="btn btn-primary" onClick={resetPin}>
        Un-Pin Location
      </button>
    );
  }
  if (pinnedStatus !== true) {
    return (
      <button className="btn btn-success">
        <Link to="/pin" style={{ color: 'white' }}>
          Pin Location
        </Link>
      </button>
    );
  }
}
