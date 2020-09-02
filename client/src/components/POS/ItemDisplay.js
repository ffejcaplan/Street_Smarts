import React, { useContext } from 'react';
import ReviewItems from './ReviewItems';
import MenuItems from './MenuItems';

import { PosGlobalContext } from '../../context/POS/PosContext';

export default function ItemDisplay() {
  const { menuItemSelect } = useContext(PosGlobalContext);

  if (menuItemSelect === false) {
    return <MenuItems />;
  }

  if (menuItemSelect === true) {
    return <ReviewItems />;
  }
}
