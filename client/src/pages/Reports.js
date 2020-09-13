import React, { useContext, useEffect } from 'react';
import { SalesGlobalContext } from '../context/SalesAndReports/SalesAndReportsContext';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SalesReport from '../components/Reports/SalesReport';
import ByDayGraph from '../components/Reports/ByDayGraph';
import ByLocationMap from '../components/Reports/ByLocationMap';
import moment from 'moment';

export default function Report() {
  const { sales, getLocations, locations } = useContext(SalesGlobalContext);

  useEffect(() => {
    getLocations();
  }, []);

  const daysOfTheWeek = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };

  const mapSales = [];

  const getData = () => {
    const dataLimit = moment().subtract(30, 'days').format('YYYY-MM-DD');

    const salesByDay = [];
    salesByDay.push(
      sales
        .filter((sale) => sale.date > dataLimit)
        .map((byDay) => {
          return {
            day: new Date(byDay.date).getDay(),
            total: byDay.total,
            date: byDay.date,
            locationId: byDay.locationId,
          };
        })
    );

    for (let i = 0; i < 7; i++) {
      const days = salesByDay[0].filter((sale) => sale.day === i);
      const uniqueDay = [
        ...new Set(
          days.map((dateDay) => {
            return dateDay.date;
          })
        ),
      ];

      const allOrdersBySpecificDate = uniqueDay.map((date) => {
        return days.filter((day) => day.date === date);
      });

      let totalIn = 0;
      let saleLocationId = 0;
      let denominator = 0;

      allOrdersBySpecificDate.map((orders) => {
        denominator += orders.length;

        orders.map((order) => {
          totalIn = parseFloat(totalIn) + parseFloat(order.total);
          saleLocationId = order.locationId;
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
      const salesByEachLocation = {
        locationId: saleLocationId,
        averageSaleByDay: parseFloat(averageIndividualSaleByDay),
        averageTotal: parseFloat(averageTotalSalesByDay),
      };
      mapSales.push(salesByEachLocation);
    }
  };

  getData();

  return (
    <div className="xs-col-12 sm-col-10" id="reportsPage">
      <br />
      <Tabs defaultActiveKey="sales" id="uncontrolled-tab-example">
        <Tab eventKey="sales" title="Sales">
          <SalesReport />
        </Tab>
        <Tab eventKey="byDay" title="Sales By Day of the Week">
          <ByDayGraph salesData={daysOfTheWeek} />
        </Tab>
        <Tab eventKey="byLocation" title="Sales By Location">
          <ByLocationMap salesData={mapSales} locations={locations} />
        </Tab>
      </Tabs>
    </div>
  );
}
