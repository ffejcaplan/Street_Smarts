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
  } = useContext(PosGlobalContext);

  //   useEffect(() => {
  //     loadInventory();
  //   }, []);
  const orderFunction = (info, numberOfItemsForOrder) => {
    falseReviewOrder();
    addToOrder(info, numberOfItemsForOrder);
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
