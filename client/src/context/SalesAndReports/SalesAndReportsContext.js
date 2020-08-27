import React from 'react';
import API from '../../utils/API';

const SalesAndReports = React.createContext({
  //
  loadOrderItems: () => {
    API.getOrderItems()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  // Ajax calls - All get requests, no post requests
  // get all from orders
  // get all from orderLocations
  // get all from locations
  // data needed
  // sales by day as a line graph
  // - Each point has following:
  // ---- date, number of total sales, total revenew from sales (orders)
  // sales by day of the week
  // - Each point has the following:
  // ---- day of week, number of total sales, total revenew from sales (orders)
  // ----dating back one month
  // sales by location
  // - pull from order locations
  // ---- display on map as points, order points by best average sale
  // ---- onClick, diplsay sales stats for location on right
  // ---- / ---- date, total number of sales, total earnings, avg sales size
});

export default SalesAndReports;
