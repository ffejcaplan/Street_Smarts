import React, { useContext, useEffect } from 'react';
import BackButton from './BackButton';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';

export default function LocationTable() {
  const {
    locations,
    loadLocations,
    setActive,
    backPinLocation,
    togglePin,
    pinnedStatusCheck,
  } = useContext(LocationGlobalContext);

  useEffect(() => {
    loadLocations();
  }, []);

  // const buttonClick = (id) => {
  //
  //
  // };
  const chooseLocation = (id) => {
    setActive(id);
    togglePin();
    backPinLocation();
  };

  return (
    <div
      className="col-sm-8 col-cs-11"
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <BackButton />

      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        {locations &&
          locations.map((location) => {
            return (
              <tbody key={location.id}>
                <tr>
                  <td>
                    {location.id}.{' '}
                    <button
                      value={location.id}
                      className="btn btn-primary"
                      onClick={(e) => {
                        chooseLocation(e.target.value);
                      }}
                    >
                      Select
                    </button>
                  </td>
                  <td>{location.nickname}</td>
                  <td>{location.latitude}</td>
                  <td>{location.longitude}</td>
                  <td>
                    <button className="btn btn-primary">View on Map</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
