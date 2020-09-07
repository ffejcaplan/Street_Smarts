import React, { useContext, useEffect } from 'react';
import { PosGlobalContext } from '../context/POS/PosContext';
import Form from '../components/Checkout/MainForm';
import BackButton from '../components/Checkout/BackButton';

export default function Checkout() {
  const { loadCategories, loadInventory, orderTotalWithTax } = useContext(
    PosGlobalContext
  );

  useEffect(() => {
    loadCategories();
    loadInventory();
  }, []);

  return (
    <>
      <BackButton />

      <Form total={parseFloat(orderTotalWithTax)} />
    </>
  );
}
