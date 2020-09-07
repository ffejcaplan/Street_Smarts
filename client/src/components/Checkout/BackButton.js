import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function BackButton() {
  const { setCheckout } = useContext(PosGlobalContext);
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        setCheckout(false);
      }}
    >
      Back
    </button>
  );
}
