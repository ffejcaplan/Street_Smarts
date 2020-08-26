import React, { useContext } from 'react';
import PosContext from '../context/PosContext';

export default function Test() {
  const { postCategories, loadCategories } = useContext(PosContext);
  return (
    <div>
      <button onClick={() => postCategories('fries')}>button</button>
      <button onClick={loadCategories}>button</button>
    </div>
  );
}
