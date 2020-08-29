/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function DisplayItem() {
  const {
    displayItemKey,
    items,
    minusNumberOfItems,
    numberOfItemsForOrder,
    addToOrder,
    addNumberOfItems,
    falseReviewOrder,
  } = useContext(PosGlobalContext);

  //   useEffect(() => {
  //     loadInventory();
  //   }, []);
  const orderFunction = (info, numberOfItemsForOrder) => {
    falseReviewOrder();

    addToOrder(info, numberOfItemsForOrder);
  };

  return (
    <>
      {displayItemKey &&
        items &&
        items
          .filter((item) => parseInt(item.id) === parseInt(displayItemKey))
          .map((info) => {
            return (
              <div key={info.id} id="displayItemDiv">
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
                    onClick={() => orderFunction(info, numberOfItemsForOrder)}
                  >
                    Add {numberOfItemsForOrder} to Order
                  </button>
                  <button onClick={addNumberOfItems}>+</button>
                </div>
              </div>
            );
          })}
    </>
  );
}
