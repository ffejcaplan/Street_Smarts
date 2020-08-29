/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function MenuItems() {
  const { categoryKey, items, displayItem, falseReviewOrder } = useContext(
    PosGlobalContext
  );

  //   useEffect(() => {
  //     loadInventory();
  //   }, []);
  const itemClick = (event) => {
    displayItem(event);
    falseReviewOrder();
  };
  return (
    <>
      {categoryKey &&
        items &&
        items.map((item) => {
          if (parseInt(item.category) === parseInt(categoryKey)) {
            return (
              <button
                key={item.id}
                value={item.id}
                onClick={(e) => {
                  itemClick(e.target.value);
                }}
              >
                {item.itemName}
              </button>
            );
          }
        })}
    </>
  );
}
