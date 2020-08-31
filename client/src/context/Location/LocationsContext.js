import React, { createContext, useReducer } from 'react';
import LocationReducer from './LocationReducer';
import API from '../../utils/API';

const initialState = {
  longitude: '',
  latitude: '',
  locationId: '',
  active: '',
  nickname: '',
};

export const LocationGlobalContext = createContext(initialState);
export const LocationsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LocationReducer.initialState);

  const loadLocations = async () => {};

  return (
    <LocationGlobalContext.Provider value={{ loadLocations }}>
      <></>
    </LocationGlobalContext.Provider>
  );
};
