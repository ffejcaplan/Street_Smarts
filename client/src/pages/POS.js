/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';
import Categories from '../components/POS/Categories';
import MenuItems from '../components/POS/MenuItems';

import OrderAndTotal from '../components/POS/OrderAndTotal';
import SubmitOrderButton from '../components/POS/SubmitOrderButton';
import ReviewItems from '../components/POS/ReviewItems';
export default function POS() {
  //   const { loadInventory, items } = useContext(PosContext);

  //   const runConsole = () => {
  //     console.log(items);
  //   };

  const { loadCategories, loadInventory, orderTotal } = useContext(
    PosGlobalContext
  );

  useEffect(() => {
    loadCategories();
    loadInventory();
  }, []);

  return (
    <>
      <Categories />
      <br />

      <MenuItems />
      <ReviewItems />
      <OrderAndTotal />

      <div>
        <br />
        <br />
        <p style={{ marginLeft: '10px' }}>${orderTotal}</p>
      </div>

      <SubmitOrderButton />
    </>
  );
}

//  <button onClick={() => postOrder(order)}>button</button>

// <button onClick={loadCategories}>button</button>

//  <button onClick={loadInventory}>button</button>
//
