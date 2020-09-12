import React, { useContext, useEffect } from 'react';
import { SalesGlobalContext } from '../context/SalesAndReports/SalesAndReportsContext';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SalesReport from '../components/Reports/SalesReport';
import ByDayGraph from '../components/Reports/ByDayGraph';
import ByLocationMap from '../components/Reports/ByLocationMap';

export default function Report() {
  return (
    <div className="xs-col-12 sm-col-10" id="reportsPage">
      <br />
      <Tabs defaultActiveKey="sales" id="uncontrolled-tab-example">
        <Tab eventKey="sales" title="Sales">
          <SalesReport />
        </Tab>
        <Tab eventKey="byDay" title="Sales By Day of the Week">
          <ByDayGraph />
        </Tab>
        <Tab eventKey="byLocation" title="Sales By Location">
          <ByLocationMap />
        </Tab>
      </Tabs>
    </div>
  );
}
