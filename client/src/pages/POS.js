/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';
import Categories from '../components/POS/Categories';
import ItemDisplay from '../components/POS/ItemDisplay';
import OrderAndTotal from '../components/POS/OrderAndTotal';
import Totals from '../components/POS/Totals';

export default function POS() {
  const { loadCategories, loadInventory, getCurrentLocation } = useContext(
    PosGlobalContext
  );

  useEffect(() => {
    loadCategories();
    loadInventory();
    getCurrentLocation();
  }, []);

  return (
    <div className="row" style={{ height: '100%' }}>
      <div className="col-sm-3">
        <Categories />
        <br />
      </div>

      <div className="col-sm-5">
        <ItemDisplay />
      </div>
      <div className="col-sm-4" style={{ height: '100%' }}>
        <OrderAndTotal />

        <Totals />
      </div>
    </div>
  );
}
