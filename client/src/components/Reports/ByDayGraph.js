import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
import { SalesGlobalContext } from '../../context/SalesAndReports/SalesAndReportsContext';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export default function ByDayGraph(props) {
  // const { sales, setSalesForMap, setDaysOfTheWeek } = useContext(
  //   SalesGlobalContext
  // );
  // const daysOfTheWeek = {
  //   0: [],
  //   1: [],
  //   2: [],
  //   3: [],
  //   4: [],
  //   5: [],
  //   6: [],
  // };

  // const mapSales = [];

  // const getData = () => {
  //   const dataLimit = moment().subtract(30, 'days').format('YYYY-MM-DD');

  //   const salesByDay = [];
  //   salesByDay.push(
  //     sales
  //       .filter((sale) => sale.date > dataLimit)
  //       .map((byDay) => {
  //         return {
  //           day: new Date(byDay.date).getDay(),
  //           total: byDay.total,
  //           date: byDay.date,
  //           locationId: byDay.locationId,
  //         };
  //       })
  //   );

  //   for (let i = 0; i < 7; i++) {
  //     const days = salesByDay[0].filter((sale) => sale.day === i);
  //     const uniqueDay = [
  //       ...new Set(
  //         days.map((dateDay) => {
  //           return dateDay.date;
  //         })
  //       ),
  //     ];

  //     const allOrdersBySpecificDate = uniqueDay.map((date) => {
  //       return days.filter((day) => day.date === date);
  //     });

  //     let totalIn = 0;
  //     let saleLocationId = 0;
  //     let denominator = 0;

  //     allOrdersBySpecificDate.map((orders) => {
  //       denominator += orders.length;

  //       orders.map((order) => {
  //         totalIn = parseFloat(totalIn) + parseFloat(order.total);
  //         saleLocationId = order.locationId;
  //       });
  //     });

  //     const averageIndividualSaleByDay = (
  //       parseFloat(totalIn) / parseInt(denominator)
  //     ).toFixed(2);

  //     const averageTotalSalesByDay = (
  //       parseFloat(totalIn) / parseInt(allOrdersBySpecificDate.length)
  //     ).toFixed(2);
  //     daysOfTheWeek[i].push({
  //       totalSales: averageTotalSalesByDay,
  //       averageSale: averageIndividualSaleByDay,
  //     });
  //     const salesByEachLocation = {
  //       locationId: saleLocationId,
  //       averageSaleByDay: parseFloat(averageIndividualSaleByDay),
  //       averageTotal: parseFloat(averageTotalSalesByDay),
  //     };
  //     mapSales.push(salesByEachLocation);
  //   }
  //   setDaysOfTheWeek(daysOfTheWeek);
  // };
  // getData();
  const chartData = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: 'Total Sales By Day',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [
          props.salesData[0][0].totalSales,
          props.salesData[1][0].totalSales,
          props.salesData[2][0].totalSales,
          props.salesData[3][0].totalSales,
          props.salesData[4][0].totalSales,
          props.salesData[5][0].totalSales,
          props.salesData[6][0].totalSales,
        ],
      },
      {
        label: 'Average Sale by Day',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(11,122,292,3)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [
          props.salesData[0][0].averageSale,
          props.salesData[1][0].averageSale,
          props.salesData[2][0].averageSale,
          props.salesData[3][0].averageSale,
          props.salesData[4][0].averageSale,
          props.salesData[5][0].averageSale,
          props.salesData[6][0].averageSale,
        ],
      },
    ],
  };

  return (
    <div
      style={{
        height: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Sales Averages',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'bottom',
          },
        }}
      />
    </div>
  );
}
