import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import POS from './pages/POS';
import PinLocation from './pages/PinLocation';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import { PosContextProvider } from './context/POS/PosContext';
import { LocationsContextProvider } from './context/Location/LocationsContext';

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <PosContextProvider>
              <POS />
            </PosContextProvider>
          </Route>
          <Route exact path="/pos">
            <PosContextProvider>
              <POS />
            </PosContextProvider>
          </Route>
          <Route exact path="/reports">
            <Reports />
          </Route>
          <Route exact path="/pin">
            <LocationsContextProvider>
              <PosContextProvider>
                <PinLocation />
              </PosContextProvider>
            </LocationsContextProvider>
          </Route>
          <Route exact path="/checkout">
            <PosContextProvider>
              <Checkout />
            </PosContextProvider>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
