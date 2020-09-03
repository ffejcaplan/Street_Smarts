import React, { useReducer, createContext } from 'react';
import ReportsAPI from '../../utils/ReportsAPI';
import SalesReducer from './SalesReducer';

const initalState = {
  sales: [],
  byLocation: [],
};

export const SalesGlobalContext = createContext(initalState);
export const SalesAndReportsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SalesReducer, initalState);

  const loadSales = async () => {
    try {
      const result = await ReportsAPI.loadSales();
      dispatch({
        type: 'LOAD_SALES',
        payload: result.data,
      });
    } catch (err) {
      console.error(err, 'load sales');
    }
  };

  const loadByLocation = async () => {
    try {
      const result = await ReportsAPI.loadByLocation();
      dispatch({
        type: 'LOAD_BY_LOCATION',
        payload: result,
      });
    } catch (err) {
      console.err0r(err, 'load by location');
    }
  };

  return (
    <SalesGlobalContext.Provider value={{ loadSales, sales: state.sales }}>
      {children}
    </SalesGlobalContext.Provider>
  );
};
