/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from 'react';
import { PosGlobalContext } from '../../context/POS/PosContext';
import { Collapse, Button } from 'react-bootstrap';

export default function Categories() {
  const [expanded, setExpanded] = useState(false);
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
    setExpanded(false);
    setSelectedFalse();
    setCategoryKey(e.target.value);
  };

  const toggleExpanded = () => {
    if (expanded === true) {
      setExpanded(false);
    } else if (expanded !== true) {
      setExpanded(true);
    }
  };

  return (
    <div>
      <Button
        className="toggler btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#divbarResponsive"
        aria-controls="divbarResponsive"
        aria-expanded={expanded}
        aria-label="toggle"
        id="categoryToggle"
        style={{ width: '95%', marginLeft: '2%', marginRight: '5%' }}
        onClick={toggleExpanded}
      >
        <i class="fa fa-bars" aria-hidden="true"></i> Categories
      </Button>
      <Collapse in={expanded}>
        <div
          id="divbarResponsive"
          className="collapse"
          style={{
            padding: '10px',
            width: '95%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
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
      </Collapse>
      <div id="divbarResponse" style={{ padding: '0px' }}>
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
