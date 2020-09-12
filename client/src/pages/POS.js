/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';
import Categories from '../components/POS/Categories';
import ItemDisplay from '../components/POS/ItemDisplay';
import OrderAndTotal from '../components/POS/OrderAndTotal';
import Totals from '../components/POS/Totals';
import Checkout from '../pages/Checkout';

export default function POS() {
  const {
    loadCategories,
    loadInventory,
    getCurrentLocation,
    checkout,
  } = useContext(PosGlobalContext);

  useEffect(() => {
    loadCategories();
    loadInventory();
    getCurrentLocation();
  }, []);

  if (checkout === true) {
    return <Checkout />;
  }
  if (checkout === false)
    return (
      <div className="row" style={{ height: '100%' }}>
        <div className="col-sm-12 col-md-3">
          <Categories />
          <br />
        </div>

        <div className="col-sm-12 col-md-5">
          <ItemDisplay />
        </div>
        <div
          className="col-sm-12 col-md-4"
          style={{ height: '100%', right: 0 }}
        >
          <OrderAndTotal />

          <Totals />
        </div>
      </div>
    );
}
