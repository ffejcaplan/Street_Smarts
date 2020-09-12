/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function MenuItems() {
  const {
    categoryKey,
    items,
    displayItem,
    falseReviewOrder,
    setSelectedTrue,
  } = useContext(PosGlobalContext);

  //   useEffect(() => {
  //     loadInventory();
  //   }, []);
  const itemClick = (event) => {
    setSelectedTrue();
    displayItem(event);
    falseReviewOrder();
  };
  return (
    <div id="itemsDiv" style={{ height: '100%', width: '100%' }}>
      {categoryKey &&
        items &&
        items.map((item) => {
          if (parseInt(item.category) === parseInt(categoryKey)) {
            return (
              <button
                className="btn btn-primary"
                key={item.id}
                value={item.id}
                onClick={(e) => {
                  itemClick(e.target.value);
                }}
              >
                {item.itemName}
              </button>
            );
          }
        })}
    </div>
  );
}
