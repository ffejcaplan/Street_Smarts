import React, { useContext, useEffect } from 'react';
import { SalesGlobalContext } from '../../context/SalesAndReports/SalesAndReportsContext';

export default function ByLocationMap() {
  const { sales, loadSales } = useContext(SalesGlobalContext);

  useEffect(() => {
    loadSales();
  }, []);

  sales.map((sale) => {
    console.log(sale.locationId, sale.total);
  });

  return <></>;
}
