import React, { useContext, useState } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';

export default function LocationNickname() {
  const {
    currentLocation,
    togglePin,
    postLocation,
    backPinLocation,
  } = useContext(LocationGlobalContext);

  const [nickname, setNickname] = useState();
  const SubmitButton = (e) => {
    e.preventDefault();

    togglePin();
    const setLocation = {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      nickname: nickname,
      active: true,
    };

    postLocation(setLocation);
    backPinLocation();

    // call function and pass setLocation as arguement
  };

  return (
    <form>
      <label>
        Location Nickname:{' '}
        <input
          type="text"
          name="name"
          onChange={(e) => setNickname(e.target.value)}
        />
      </label>

      <button
        onClick={(e) => {
          SubmitButton(e);
        }}
      >
        submit
      </button>
    </form>
  );
}
