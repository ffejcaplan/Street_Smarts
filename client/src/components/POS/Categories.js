/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';

export default function Categories() {
  const { categories, setCategoryKey, falseReviewOrder } = useContext(
    PosGlobalContext
  );
  // useEffect(() => {
  //   loadCategories();
  // }, []);

  const handleClick = (e) => {
    falseReviewOrder();
    setCategoryKey(e.target.value);
  };

  return (
    <>
      {categories &&
        categories.map((category) => {
          return (
            <button key={category.id} value={category.id} onClick={handleClick}>
              {category.name}
            </button>
          );
        })}
    </>
  );
}
