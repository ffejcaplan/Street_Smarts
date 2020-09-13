import React, { useReducer, createContext } from 'react';
import ReportsAPI from '../../utils/ReportsAPI';
import SalesReducer from './SalesReducer';

const initalState = {
  sales: [],
  locations: [],
  salesForMap: [],
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

  const getLocations = async () => {
    try {
      const result = await ReportsAPI.getLocations();
      dispatch({
        type: 'LOAD_LOCATIONS',
        payload: result.data,
      });
    } catch (err) {
      console.error(err, 'load by location');
    }
  };

  const setSalesForMap = (salesData) => {
    console.log(salesData);
    try {
      dispatch({
        type: 'SALES_FOR_MAP',
        payload: salesData,
      });
    } catch (err) {
      console.error(err, 'sales for map');
    }
  };

  return (
    <SalesGlobalContext.Provider
      value={{
        loadSales,
        sales: state.sales,
        setSalesForMap,
        salesForMap: state.salesForMap,
        getLocations,
        locations: state.locations,
      }}
    >
      {children}
    </SalesGlobalContext.Provider>
  );
};
