import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';
import Toast from 'react-bootstrap/Toast';

export default function SubmitOrderButton() {
  const { setCheckout, setTotals, orderTotal } = useContext(PosGlobalContext);
  //   const { orderItemDisplay } = useContext(PosGlobalContext);
  //   useEffect(() => {
  //     loadCategories();
  //   }, []);

  const handleClick = () => {
    if (orderTotal === 0) {
      return alert('There are no items for checkout in this order');
    }
    if (orderTotal !== 0) {
      setCheckout(true);
      setTotals();
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Checkout
      </button>
    </>
  );
}
