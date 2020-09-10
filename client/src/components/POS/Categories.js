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
    <div>
      <button
        className="toggler btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#divbarResponsive"
        aria-controls="divbarResponsive"
        aria-expanded="false"
        aria-label="Toggle"
      >
        <i class="fa fa-bars" aria-hidden="true"></i> Categories
      </button>
      <div
        id="divbarResponsive"
        className="collapse"
        style={{ padding: '0px' }}
      >
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
    </div>
  );
}
