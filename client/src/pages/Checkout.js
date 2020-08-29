import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';

export default function Checkout() {
  const { loadCategories, loadInventory, orderTotal } = useContext(
    PosGlobalContext
  );

  useEffect(() => {
    loadCategories();
    loadInventory();
  }, []);

  return <></>;
}
