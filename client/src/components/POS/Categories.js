/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function Categories() {
  const {
    categories,
    setCategoryKey,
    falseReviewOrder,
    setSelectedFalse,
  } = useContext(PosGlobalContext);
  // useEffect(() => {
  //   loadCategories();
  // }, []);

  const handleClick = (e) => {
    falseReviewOrder();
    setSelectedFalse();
    setCategoryKey(e.target.value);
  };

  return (
    <div style={{ border: '2px solid black', padding: '0px' }}>
      {categories &&
        categories.map((category) => {
          return (
            <button
              className="btn btn-primary"
              key={category.id}
              value={category.id}
              onClick={handleClick}
              style={{
                width: '100%',
                border: '1px solid white',
                height: '60px',
              }}
            >
              {category.name}
            </button>
          );
        })}
    </div>
  );
}
