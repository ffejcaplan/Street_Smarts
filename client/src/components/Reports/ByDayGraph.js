import React from 'react';
import { Line } from 'react-chartjs-2';

export default function ByDayGraph(props) {
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
