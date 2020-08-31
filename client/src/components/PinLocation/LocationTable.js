import React, { useContext, useEffect } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';

export default function LocationTable() {
  const { locations, loadLocations, backPinLocation } = useContext(
    LocationGlobalContext
  );

  useEffect(() => {
    loadLocations();
    // navigator.geolocation.getCurrentPosition((position) => {
    //   viewport.longitude = position.coords.longitude;
    //   viewport.latitude = position.coords.latitude;
    //   // });
    //   console.log(viewport);
    // });
  }, []);
  console.log(locations);
  const buttonClick = () => {
    console.log('hello');
  };

  return (
    <div
      className="col-sm-8 col-cs-11"
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <button className="btn btn-primary" onClick={backPinLocation}>
        Back
      </button>
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
                    <button className="btn btn-primary" onClick={buttonClick}>
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
