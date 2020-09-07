import React, { useContext, useEffect } from 'react';
import LocationTable from '../components/PinLocation/LocationTable';
import CurrentOrSaved from '../components/PinLocation/CurrentOrSaved';
import PinCurrentLocation from '../components/PinLocation/PinCurrentLocation';
import { LocationGlobalContext } from '../context/Location/LocationsContext';

export default function PinLocation() {
  const {
    setCurrentLocation,
    currentLocation,
    selected,
    newLocation,
    pinnedStatusCheck,
    togglePin,
    pinnedStatus,
  } = useContext(LocationGlobalContext);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
  };
  const success = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat, long);
    setCurrentLocation({
      longitude: long,
      latitude: lat,
      zoom: 12,
      width: '50vw',
      height: '50vh',
    });
  };
  const runStart = async () => {
    await pinnedStatusCheck();
    if (pinnedStatus === true) {
      togglePin();
      console.log(pinnedStatus);
    } else {
      console.log('not so true');
    }
  };

  useEffect(() => {
    getLocation();
    // pinnedStatusCheck();
    // if (pinnedStatus == true) {
    //   togglePin();
    //   console.log('this shit is true');
    // }
    runStart();
  }, []);

  if (selected === false && newLocation === false) {
    return <CurrentOrSaved />;
  }
  if (selected === true && newLocation === false) {
    return <LocationTable />;
  }
  if (selected === true && newLocation === true) {
    return <PinCurrentLocation />;
  }
}

// return (
//   <ReactMapGL
//     {...viewport}
//     mapboxApiAccessToken="pk.eyJ1IjoiZmZlamNhcDUiLCJhIjoiY2tlMzBqem9rMGVmcDJ0cDhwNjdyeHJiNiJ9.EJrCDgJEG_jROwOWwyWMMw"
//     mapStyle="mapbox://styles/ffejcap5/cke8wj61j5gh91atb9cwiygp8"
//   ></ReactMapGL>
// );

//   const { latitude, longitude, error } = usePosition();
//   useEffect(() => {
// 1. get list of locations from location table
// 2. get current location and pin on map
//   const { setLocation } = useContext(PosGlobalContext);

//   let viewport = {
//     longitude: '',
//     latitude: '',
//     locationId: '',
//     locationNickname: '',
//     zoom: 3,
//     width: '50vw',
//     height: '50vh',
//   };
