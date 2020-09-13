import React, { useContext } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';
import ReactMapGL, { Marker } from 'react-map-gl';
import BackButton from './BackButton';
import LocationNickname from './LocationNickname';
import Logo from '../../assets/logos/StreetSmartsLogo3.jpg';

export default function PinCurrentLocation() {
  const { currentLocation } = useContext(LocationGlobalContext);

  //   useEffect(() => {
  //     console.log(currentLocation);
  //   });
  const viewpoint = currentLocation;

  return (
    <div
      className="col-sm-8 col-cs-11"
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {' '}
      <BackButton />
      <ReactMapGL
        {...viewpoint}
        mapboxApiAccessToken="pk.eyJ1IjoiZmZlamNhcDUiLCJhIjoiY2tlMzBqem9rMGVmcDJ0cDhwNjdyeHJiNiJ9.EJrCDgJEG_jROwOWwyWMMw"
        mapStyle="mapbox://styles/ffejcap5/cke8wj61j5gh91atb9cwiygp8"
        className="col-xs-11 col-sm-12"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Marker
          key={1}
          latitude={currentLocation.latitude}
          longitude={currentLocation.longitude}
        >
          <img className="img-thumbnail" src={Logo} alt="logo" width="50px" />
        </Marker>
      </ReactMapGL>
      <LocationNickname />
    </div>
  );
}
