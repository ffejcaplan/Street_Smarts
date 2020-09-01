import React, { useContext } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';

export default function BackButton() {
  const { backPinLocation } = useContext(LocationGlobalContext);
  return (
    <button className="btn btn-primary" onClick={backPinLocation}>
      Back
    </button>
  );
}
