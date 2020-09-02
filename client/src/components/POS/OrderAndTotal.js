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

  let revisedOrder = orderItems;

  const reviewSelectedItem = (target) => {
    setSelectedTrue();
    const editNumber = parseInt(target) + 1;
    trueReviewOrder(editNumber);
  };

  const deleteItemFromOrder = (key) => {
    console.log(key);

    //TODO why filter no work?

    revisedOrder.map((item) => {
      console.log(item.key);
      if (parseInt(item.key) === parseInt(key)) {
        const index = revisedOrder.indexOf(item);
        revisedOrder.splice(index, 1);
        let newTotal = 0;
        revisedOrder.map((item) => {
          newTotal += parseFloat(item.price) * parseFloat(item.numberOfItem);
          return newTotal;
        });
        updateOrderItem(revisedOrder, newTotal);
      }
    });
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
                    value={orderItem.key}
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
                    parseInt(orderItem.numberOfItem)}
                </td>
                <td>
                  <button
                    value={orderItem.key}
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
