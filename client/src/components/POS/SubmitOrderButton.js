import React from 'react';
// import { PosGlobalContext } from '../../context/POS/PosContext';

export default function SubmitOrderButton() {
  //   const { orderItemDisplay } = useContext(PosGlobalContext);
  //   useEffect(() => {
  //     loadCategories();
  //   }, []);
  return (
    <>
      <button className="btn btn-primary" href="/reports">
        Checkout
      </button>
    </>
  );
}
