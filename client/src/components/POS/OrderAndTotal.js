import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function OrderAndTotal() {
  const {
    orderItems,
    trueReviewOrder,
    setSelectedTrue,
    updateOrderItem,
  } = useContext(PosGlobalContext);
  //   useEffect(() => {
  //     loadCategories();
  //   }, []);
  let i = 1;
  let j = 1;
  let k = 1;

  let revisedOrder = orderItems;

  const reviewSelectedItem = (target) => {
    setSelectedTrue();
    trueReviewOrder(target);
  };

  const deleteItemFromOrder = (key) => {
    let index = parseInt(key) - 1;
    revisedOrder.splice(index, 1);
    let newTotal = 0;
    revisedOrder.map((item) => {
      newTotal += parseFloat(item.price) * parseFloat(item.numberOfItem);
      return newTotal;
    });
    updateOrderItem(revisedOrder, newTotal);
  };
  return (
    <table className="table">
      {orderItems &&
        orderItems.map((orderItem) => {
          return (
            <tbody key={i++}>
              <tr>
                <td>
                  <button
                    // TODO figure out a key
                    value={j++}
                    className="row"
                    style={{ marginLeft: '10px' }}
                    onClick={(e) => {
                      reviewSelectedItem(e.target.value);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>{orderItem.numberOfItem}x </td>
                <td> {orderItem.itemName} </td>
                <td>
                  {' '}
                  $
                  {parseFloat(orderItem.price) *
                    parseFloat(orderItem.numberOfItem)}
                </td>
                <td>
                  <button
                    value={k++}
                    onClick={(e) => deleteItemFromOrder(e.target.value)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
}
