/* eslint-disable no-lone-blocks */

import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';
import OrderItemReview from './OrderItemReview';
import DisplayItem from './DisplayItem';

export default function ReviewItems() {
  const { reviewOrder } = useContext(PosGlobalContext);

  {
    if (reviewOrder === false) {
      return <DisplayItem />;
    } else {
      return <OrderItemReview />;
    }
  }
}
