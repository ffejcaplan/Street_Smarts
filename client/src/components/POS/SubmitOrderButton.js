import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function SubmitOrderButton() {
  const { setCheckoutTrue } = useContext(PosGlobalContext);
  //   const { orderItemDisplay } = useContext(PosGlobalContext);
  //   useEffect(() => {
  //     loadCategories();
  //   }, []);
  return (
    <>
      <button className="btn btn-primary" onClick={setCheckoutTrue}>
        Checkout
      </button>
    </>
  );
}
