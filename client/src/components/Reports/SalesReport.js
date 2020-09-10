import React, { useContext, useEffect } from 'react';
import { SalesGlobalContext } from '../../context/SalesAndReports/SalesAndReportsContext';
import moment from 'moment';

export default function SalesReport() {
  const { sales, loadSales } = useContext(SalesGlobalContext);

  useEffect(() => {
    loadSales();
  }, []);

  const todaysDate = moment().format('YYYY-MM-DD');

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Customer</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {sales
          .filter((aSale) => aSale.date === todaysDate)
          .map((sale) => {
            return (
              <tr key={sale.id}>
                <td>{sale.date}</td>
                <td>{sale.time}</td>
                <td>{sale.customer}</td>
                <td>${sale.total}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
