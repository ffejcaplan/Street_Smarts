import React, { useContext } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';

export default function PinButton() {
  const { pinned, resetPin } = useContext(LocationGlobalContext);

  if (pinned === true) {
    return (
      <button className="btn btn-primary" onClick={resetPin}>
        Un-Pin Location
      </button>
    );
  }
  if (pinned !== true) {
    return <button className="btn btn-success"> Pin Location</button>;
  }
}
