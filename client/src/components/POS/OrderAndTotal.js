import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function OrderAndTotal() {
  const { orderItems, trueReviewOrder } = useContext(PosGlobalContext);
  //   useEffect(() => {
  //     loadCategories();
  //   }, []);
  let i = 1;
  let j = 1;
  return (
    <>
      {orderItems &&
        orderItems.map((orderItem) => {
          return (
            <>
              <button
                // TODO figure out a key
                key={i++}
                value={j++}
                className="row"
                style={{ marginLeft: '10px' }}
                onClick={(e) => {
                  trueReviewOrder(e.target.value);
                  console.log(e.target);
                }}
              >
                <p>{orderItem.numberOfItem}x - </p>
                <p> {orderItem.itemName} - </p>
                <p>
                  {' '}
                  $
                  {parseFloat(orderItem.price) *
                    parseFloat(orderItem.numberOfItem)}
                </p>
              </button>
            </>
          );
        })}
    </>
  );
}
