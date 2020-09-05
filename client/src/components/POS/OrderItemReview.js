import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function OrderItemReview() {
  const {
    itemEditKey,
    orderItems,
    falseReviewOrder,
    updateOrderItem,
    setSelectedFalse,
  } = useContext(PosGlobalContext);

  //   useEffect(() => {
  //     loadInventory();
  //   }, []);

  const revisedOrder = orderItems;

  const editExistingorder = (operation, key) => {
    if (operation === 'minus') {
      revisedOrder
        .filter((item) => parseInt(item.key) === parseInt(key))
        .map((info) => {
          if (info.numberOfItem > 0) {
            info.numberOfItem--;
          }
          //   figure out how to remove else{}
        });
    } else if (operation === 'plus') {
      revisedOrder
        .filter((item) => parseInt(item.key) === parseInt(key))
        .map((info) => {
          info.numberOfItem++;
        });
    }
    let newTotal = 0;
    revisedOrder.map((item) => {
      newTotal += parseFloat(item.price) * parseFloat(item.numberOfItem);
      return newTotal;
    });
    updateOrderItem(revisedOrder, newTotal);
  };

  const addUpdatedToOrder = (key, value) => {
    //if value ===0 delete target from order items
    if (value === 0) {
      console.log(key);
      console.log(value);
      console.log(revisedOrder);

      const index = revisedOrder.findIndex(
        (item) => parseInt(item.itemId) === parseInt(key)
      );

      revisedOrder.splice(index, 1);
      let newTotal = 0;
      revisedOrder.map((item) => {
        newTotal += parseFloat(item.price) * parseFloat(item.numberOfItem);
        return newTotal;
      });
      updateOrderItem(revisedOrder, newTotal);
      setSelectedFalse();
      falseReviewOrder();
    } else {
      setSelectedFalse();
      falseReviewOrder();
    }
  };

  return (
    <div className="container">
      {itemEditKey &&
        orderItems &&
        orderItems
          .filter((item) => parseInt(item.key) === parseInt(itemEditKey))
          .map((info) => {
            return (
              <div key={info.key} id="displayItemDiv">
                <p>{info.itemName}</p>
                <p>{info.price}</p>
                <div>
                  <button
                    className="btn btn-primary"
                    style={{ border: '1px solid white' }}
                    onClick={() => {
                      editExistingorder('minus', info.key);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-primary"
                    value={info.itemId}
                    style={{ border: '1px solid white' }}
                    onClick={(e) => {
                      addUpdatedToOrder(e.target.value, info.numberOfItem);
                    }}
                  >
                    Add {info.numberOfItem} to Order
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ border: '1px solid white' }}
                    onClick={() => {
                      editExistingorder('plus', info.key);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
}
