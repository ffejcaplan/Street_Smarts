import React, { useContext, useEffect, useState } from 'react';
import { SalesGlobalContext } from '../../context/SalesAndReports/SalesAndReportsContext';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export default function ByDayGraph() {
  const { sales } = useContext(SalesGlobalContext);

  const daysOfTheWeek = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };

  // date 30 days ago -- sets search parameters
  const dataLimit = moment().subtract(30, 'days').format('YYYY-MM-DD');

  //gathers all sales between dataLimit and today
  const salesByDay = [];

  salesByDay.push(
    sales
      .filter((sale) => sale.date > dataLimit)
      .map((byDay) => {
        return {
          day: new Date(byDay.date).getDay(),
          total: byDay.total,
          date: byDay.date,
        };
      })
  );

  //loops over 0-6 corresponding to days of week
  for (let i = 0; i < 7; i++) {
    // days = each day that fits the sepcific day in the loop
    // if i equals to - days is equal to 2 days equals All tuesdays
    const days = salesByDay[0].filter((sale) => sale.day === i);

    // finds each unique instance of that day of the week by date
    // if there are four wednesdays in the last month, it will pull out each
    // specific date so you can average out by date
    const uniqueDay = [
      ...new Set(
        days.map((dateDay) => {
          return dateDay.date;
        })
      ),
    ];

    // maps through the array of each unique day
    // pulls creates an array of sales made on that day
    const allOrdersBySpecificDate = uniqueDay.map((date) => {
      return days.filter((day) => day.date === date);
    });

    // allOrdersBySpecificDate contains all sales made on each day

    let totalIn = 0;
    let denominator = 0;

    // map through
    //this is mapping throuhg all orders in the array allOrdersBySpecificDate
    // which is an array that can contain mulitple dates
    // so effectively this is mapping through all the orders placed on all the days
    // a filter needs to be put in place to contain
    allOrdersBySpecificDate.map((orders) => {
      denominator += orders.length;

      orders.map((order) => {
        totalIn = parseFloat(totalIn) + parseFloat(order.total);
      });
    });
    const averageIndividualSaleByDay = (
      parseFloat(totalIn) / parseInt(denominator)
    ).toFixed(2);
    const averageTotalSalesByDay = (
      parseFloat(totalIn) / parseInt(allOrdersBySpecificDate.length)
    ).toFixed(2);
    daysOfTheWeek[i].push({
      totalSales: averageTotalSalesByDay,
      averageSale: averageIndividualSaleByDay,
    });
  }
  console.log(daysOfTheWeek[0]);
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
          daysOfTheWeek[0][0].totalSales,
          daysOfTheWeek[1][0].totalSales,
          daysOfTheWeek[2][0].totalSales,
          daysOfTheWeek[3][0].totalSales,
          daysOfTheWeek[4][0].totalSales,
          daysOfTheWeek[5][0].totalSales,
          daysOfTheWeek[6][0].totalSales,
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
          daysOfTheWeek[0][0].averageSale,
          daysOfTheWeek[1][0].averageSale,
          daysOfTheWeek[2][0].averageSale,
          daysOfTheWeek[3][0].averageSale,
          daysOfTheWeek[4][0].averageSale,
          daysOfTheWeek[5][0].averageSale,
          daysOfTheWeek[6][0].averageSale,
        ],
      },
    ],
  };

  console.log(daysOfTheWeek);
  console.log(chartData.dataSets);

  return (
    <div
      style={{
        width: '70%',
        height: '70%',
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
            position: 'right',
          },
        }}
      />
    </div>
  );
}
