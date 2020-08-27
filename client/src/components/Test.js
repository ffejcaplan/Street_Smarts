/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';

export default function Test() {
  //   const { loadInventory, items } = useContext(PosContext);

  //   const runConsole = () => {
  //     console.log(items);
  //   };

  const {
    loadCategories,
    loadInventory,
    postCategories,
    items,
    categories,
  } = useContext(PosGlobalContext);

  useEffect(() => {
    loadCategories();
    loadInventory();
  }, []);

  return (
    <>
      {categories &&
        categories.map((category) => {
          return <button key={category.id}>{category.name}</button>;
        })}
      <br />
      {items &&
        items.map((item) => {
          return <button key={item.id}>{item.itemName}</button>;
        })}
    </>
  );
}

//  <button onClick={() => postOrder(order)}>button</button>

// <button onClick={loadCategories}>button</button>

//  <button onClick={loadInventory}>button</button>
//
