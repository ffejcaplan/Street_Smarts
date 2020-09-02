import React, { useContext } from 'react';
import SubmitOrderButton from './SubmitOrderButton';

import { PosGlobalContext } from '../../context/POS/PosContext';

export default function Totals() {
  const { orderTotal } = useContext(PosGlobalContext);

  return (
    <div style={{ position: 'fixed', bottom: 0 }}>
      <br />
      <br />
      <p style={{ marginLeft: '10px' }}>Total: ${orderTotal.toFixed(2)}</p>
      <p style={{ marginLeft: '10px' }}>
        Tax: ${(orderTotal * 0.08).toFixed(2)}
      </p>
      <p style={{ marginLeft: '10px' }}>
        Tax: ${(orderTotal * 1.08).toFixed(2)}
      </p>

      <SubmitOrderButton />
    </div>
  );
}
