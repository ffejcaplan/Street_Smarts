import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';
import Form from '../components/Checkout/MainForm';

export default function Checkout() {
  const { loadCategories, loadInventory, orderTotal } = useContext(
    PosGlobalContext
  );

  useEffect(() => {
    loadCategories();
    loadInventory();
  }, []);

  return (
    <>
      <Form />
    </>
  );
}
