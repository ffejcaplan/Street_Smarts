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

  console.log('world hello');
  console.log(itemEditKey);

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
    console.log(newTotal);
    updateOrderItem(revisedOrder, newTotal);
  };

  const addUpdatedToOrder = () => {
    setSelectedFalse();
    falseReviewOrder();
  };

  return (
    <div className="container">
      {itemEditKey &&
        orderItems &&
        orderItems
          .filter((item) => parseInt(item.key) === parseInt(itemEditKey))
          .map((info) => {
            console.log(info);
            return (
              <div key={info.key} id="displayItemDiv">
                <p>{info.itemName}</p>
                <p>{info.price}</p>
                <div>
                  {console.log('hello world')}
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
                    style={{ border: '1px solid white' }}
                    onClick={addUpdatedToOrder}
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
