import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function OrderAndTotal() {
  const {
    orderItems,
    trueReviewOrder,
    setSelectedTrue,
    updateOrderItem,
  } = useContext(PosGlobalContext);
  let i = 1;

  let revisedOrder = orderItems;

  const reviewSelectedItem = (target) => {
    trueReviewOrder(target);
    setSelectedTrue();
  };

  const deleteItemFromOrder = (key) => {
    revisedOrder.map((item) => {
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
    <table className="table" id="itemTable">
      {orderItems &&
        orderItems.map((orderItem) => {
          return (
            <tbody key={i++}>
              <tr>
                <td>
                  <button
                    value={orderItem.key}
                    className="fa fa-pencil-square-o btn-warning "
                    style={{ marginLeft: '10px', borderRadius: '6px' }}
                    onClick={(e) => {
                      reviewSelectedItem(e.target.value);
                    }}
                  >
                    {/* <i className="fa fa-pencil-square-o" /> */}
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
                    style={{ borderRadius: '6px' }}
                    className="fa fa-trash btn-danger "
                    onClick={(e) => deleteItemFromOrder(e.target.value)}
                  >
                    {/* <i className="fa fa-trash" /> */}
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
}
