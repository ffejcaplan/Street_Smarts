import React from 'react';
import MapData from './MapData';

export default function ByLocationMap(props) {
  console.log('hello world');
  const salesByLocation = props.salesData;
  const locations = props.locations;
  const combineByLocation = [];
  const locationIds = [];
  const finalSales = [];
  const usedLocations = [];

  salesByLocation.map((sales) => {
    locationIds.push(sales.locationId);
  });
  const uniqueIds = new Set(locationIds);
  const idArray = [...uniqueIds];

  idArray.map((id) => {
    const match = salesByLocation.filter((sales) => sales.locationId === id);
    combineByLocation.push(match);
  });
  combineByLocation.map((saleDay) => {
    let totalSalesDay = 0;
    let avgSale = 0;
    let spot = locations.filter(
      (location) => location.id === saleDay[0].locationId
    );
    usedLocations.push(spot);
    saleDay.map((day) => {
      totalSalesDay += parseFloat(day.averageTotal);
      avgSale += parseFloat(day.averageSaleByDay);
    });

    const averages = {
      id: saleDay[0].locationId,
      averageSale: (parseFloat(avgSale) / parseInt(saleDay.length)).toFixed(2),
      avgDayTotal: (
        parseFloat(totalSalesDay) / parseInt(saleDay.length)
      ).toFixed(2),
    };
    finalSales.push(averages);
  });

  return <MapData sales={finalSales} locations={usedLocations} />;
}
