import React, { createContext, useReducer } from 'react';
import LocationReducer from './LocationReducer';
import LocationsAPI from '../../utils/LocationsAPI';

const initialState = {
  locations: [],
  currentLocation: [],
  selected: false,
  newLocation: false,
};

export const LocationGlobalContext = createContext(initialState);
export const LocationsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const loadLocations = async () => {
    try {
      console.log('hello?');
      const locations = await LocationsAPI.loadLocations();
      dispatch({
        type: 'LOAD_LOCATIONS',
        payload: locations.data,
      });
    } catch (err) {
      console.error(err + 'load locations fail');
    }
  };

  const setCurrentLocation = async (location) => {
    try {
      dispatch({
        type: 'SET_CURRENT_LOCATION',
        payload: location,
      });
      console.log(location);
    } catch (err) {
      console.error(err, 'set current location');
    }
  };

  const chooseSaved = async () => {
    try {
      dispatch({
        type: 'CHOOSED_SAVED',
      });
    } catch (err) {
      console.error(err, 'choose saved');
    }
  };

  const chooseCurrentLocation = async () => {
    try {
      dispatch({
        type: 'CHOOSE_CURRENT_LOCATION',
      });
    } catch (err) {
      console.error(err, 'choose current location');
    }
  };

  const backPinLocation = async () => {
    try {
      dispatch({
        type: 'CHOOSE_BACK',
      });
    } catch (err) {
      console.error(err, 'choose back');
    }
  };

  return (
    <LocationGlobalContext.Provider
      value={{
        loadLocations,
        locations: state.locations,
        setCurrentLocation,
        currentLocation: state.currentLocation,
        selected: state.selected,
        newLocation: state.newLocation,
        chooseSaved,
        chooseCurrentLocation,
        backPinLocation,
      }}
    >
      {children}
    </LocationGlobalContext.Provider>
  );
};
