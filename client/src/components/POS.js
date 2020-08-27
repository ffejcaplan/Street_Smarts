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
    categoryKey,
    setCategoryKey,
    items,
    categories,
    displayItem,
    displayItemKey,
    numberOfItemsForOrder,
    minusNumberOfItems,
    addNumberOfItems,
    addToOrder,
  } = useContext(PosGlobalContext);

  useEffect(() => {
    loadCategories();
    loadInventory();
  }, []);

  return (
    <>
      {categories &&
        categories.map((category) => {
          return (
            <button
              key={category.id}
              value={category.id}
              onClick={(e) => {
                setCategoryKey(e.target.value);
              }}
            >
              {category.name}
            </button>
          );
        })}
      <br />
      {categoryKey &&
        items &&
        items.map((item) => {
          if (parseInt(item.category) === parseInt(categoryKey)) {
            return (
              <button
                key={item.id}
                value={item.id}
                onClick={(e) => {
                  displayItem(e.target.value);
                  console.log(displayItemKey);
                }}
              >
                {item.itemName}
              </button>
            );
          }
        })}

      {displayItemKey &&
        items &&
        items
          .filter((item) => parseInt(item.id) === parseInt(displayItemKey))
          .map((info) => {
            return (
              <div key={info.id}>
                <p>{info.itemName}</p>
                <p>{info.price}</p>
                <div>
                  <button
                    onClick={() => {
                      minusNumberOfItems(numberOfItemsForOrder);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToOrder(info, numberOfItemsForOrder)}
                  >
                    Add {numberOfItemsForOrder} to Order
                  </button>
                  <button onClick={addNumberOfItems}>+</button>
                </div>
              </div>
            );
          })}
      <div>{}</div>
    </>
  );
}

//  <button onClick={() => postOrder(order)}>button</button>

// <button onClick={loadCategories}>button</button>

//  <button onClick={loadInventory}>button</button>
//
