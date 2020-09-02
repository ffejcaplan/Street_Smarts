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
    setSelectedFalse,
    orderItems,
    updateOrderItem,
    resetCount,
  } = useContext(PosGlobalContext);

  const revisedOrder = orderItems;

  const orderFunction = (info, numberOfItemsForOrder) => {
    const match = orderItems.filter((item) => item.itemId === info.id);
    if (match.length > 0) {
      const matchKey = match[0].key;

      revisedOrder[matchKey - 1].numberOfItem += numberOfItemsForOrder;
      console.log(revisedOrder);
      let newTotal = 0;
      revisedOrder.map((item) => {
        newTotal += parseFloat(item.price) * parseFloat(item.numberOfItem);
        return newTotal;
      });
      updateOrderItem(revisedOrder, newTotal);
      resetCount();
    } else {
      falseReviewOrder();
      addToOrder(info, numberOfItemsForOrder);
    }
  };

  const submitItem = (info, numItems) => {
    orderFunction(info, numItems);
    setSelectedFalse();
  };

  return (
    // <div style={{ height: '100%', width: '100%', border: '1px solid black' }}>
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
                    className="btn btn-primary"
                    style={{ border: '1px solid white' }}
                    onClick={() => {
                      minusNumberOfItems(numberOfItemsForOrder);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ border: '1px solid white' }}
                    onClick={() => submitItem(info, numberOfItemsForOrder)}
                  >
                    Add {numberOfItemsForOrder} to Order
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ border: '1px solid white' }}
                    onClick={addNumberOfItems}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
    </>
    // </div>
  );
}
