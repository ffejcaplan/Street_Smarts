import React, { useContext, useEffect } from 'react';
import { SalesGlobalContext } from '../context/SalesAndReports/SalesAndReportsContext';

export default function Report() {
  const { sales, loadSales } = useContext(SalesGlobalContext);

  useEffect(() => {
    loadSales();
  }, []);
  console.log(sales);

  return <></>;
}
