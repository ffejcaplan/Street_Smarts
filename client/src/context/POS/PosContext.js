import React, { createContext, useReducer } from 'react';
import PosReducer from './PosReducer';
import API from '../../utils/API';

const initialState = {
  orderTotal: 0,
  orderTax: 0,
  orderTotalWithTax: 0,
  orderCustomer: '',
  paymentType: '',
  orderLocationId: null,
  orderLatitude: null,
  orderLongitude: null,
  orderLocationNickname: null,
  orderId: '',
  orderItems: [],
  orderItemKey: 0,
  categories: [],
  items: '',
  itemEditKey: 0,
  categoryKey: '',
  displayItemKey: '',
  numberOfItemsForOrder: 1,
  reviewOrder: false,
  menuItemSelect: false,
  itemKeyIncrement: 1,
  checkout: false,
};

export const PosGlobalContext = createContext(initialState);
export const PosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PosReducer, initialState);

  const loadCategories = async () => {
    try {
      const result = await API.getCategories();
      dispatch({
        type: 'LOAD_CATEGORIES',
        payload: result.data,
      });
    } catch (err) {
      console.error(err + 'Category Broke');
    }
  };

  const loadInventory = async () => {
    try {
      const result = await API.getInventory();
      dispatch({
        type: 'LOAD_INVENTORY',
        payload: result.data,
      });
    } catch (err) {
      console.error(err + 'this shit fucked up');
    }
    return state;
  };

  // function to add new item in Inventory page

  const setCategoryKey = async (key) => {
    try {
      dispatch({
        type: 'SET_CATEGORY_KEY',
        payload: key,
      });
    } catch (err) {
      console.error(err, 'Category Key est fucked');
    }
  };

  const displayItem = async (key) => {
    try {
      await dispatch({
        type: 'DISPLAY_ITEM',
        payload: key,
      });
    } catch (err) {
      console.error(err, 'Display item error');
    }
  };

  const postCategories = async (category) => {
    try {
      const result = await API.postCategories(category);
      dispatch({
        type: 'POST_CATEGORY',
        payload: result.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const postOrder = async () => {
    try {
      console.log(state);
      const result = await API.postOrder(state);
      dispatch({
        type: 'POST_ORDER_ID',
        payload: result.data.id,
      }); // .catch((err) => {
      //   console.error(err);
      // })
      // .then(() => {
      //   state.items.map((item) => {
      //     item.orderId = orderIdVar;
      //     API.postItemOrder(item)
      //       .then((res) => {
      //         console.log('hello');
      //         return res;
      //       })
      //       .catch((err) => {
      //         console.error(err);
      //       });
      //   });
      // })
      // .then(() => {
      //   API.postOrderLocation(state)
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //     });
      // });
    } catch (err) {
      console.error(err, 'post order');
    }
  };

  const minusNumberOfItems = async (number) => {
    if (number > 0) {
      try {
        await dispatch({
          type: 'MINUS_NUMBER',
        });
      } catch (err) {
        console.error(err, 'minus number');
      }
    }
  };

  const addNumberOfItems = async () => {
    try {
      await dispatch({
        type: 'ADD_NUMBER',
      });
    } catch (err) {
      console.error(err, 'add error');
    }
  };

  const addToOrder = async (item, count) => {
    if (count > 0) {
      try {
        await dispatch({
          type: 'ADD_TO_ORDER',
          payload: {
            key: state.itemKeyIncrement,
            itemName: item.itemName,
            itemId: item.id,
            price: parseFloat(item.price),
            numberOfItem: count,
          },
        });
      } catch (err) {
        console.error(err, 'add to order broken');
      }
    } else if (count < 1) {
      try {
        await dispatch({
          type: 'RESET_COUNT',
        });
      } catch (err) {
        console.error(err, 'reset count');
      }
    }
  };

  const falseReviewOrder = async () => {
    try {
      await dispatch({
        type: 'FALSE_REVIEW_ORDER',
      });
    } catch (err) {
      console.error(err, 'update review order');
    }
  };
  const trueReviewOrder = async (key) => {
    try {
      await dispatch({
        type: 'TRUE_REVIEW_ORDER',
        payload: key,
      });
    } catch (err) {
      console.error(err, 'update review order');
    }
  };

  const updateOrderItem = async (newOrder, newTotal) => {
    try {
      await dispatch({
        type: 'UPDATE_ORDER_ITEM',
        payload: [newOrder, newTotal],
      });
    } catch (err) {
      console.error(err, 'updateOrderItem');
    }
  };

  const getCurrentLocation = async () => {
    try {
      const currentLocation = await API.getCurrentLocation();
      if (currentLocation.data) {
        dispatch({
          type: 'GET_CURRENT_LOCATION',
          payload: currentLocation.data,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const setSelectedFalse = () => {
    try {
      dispatch({
        type: 'SET_SELECTED_FALSE',
      });
    } catch (err) {
      console.error(err, 'set selected false');
    }
  };

  const setSelectedTrue = () => {
    try {
      dispatch({
        type: 'SET_SELECTED_TRUE',
      });
    } catch (err) {
      console.error(err, 'set selected true');
    }
  };
  const resetCount = () => {
    try {
      dispatch({
        type: 'RESET_COUNT',
      });
    } catch (err) {
      console.error(err, 'reset count');
    }
  };

  const setCheckout = (value) => {
    try {
      dispatch({
        type: 'SET_CHECKOUT',
        payload: value,
      });
    } catch (err) {
      console.error(err, 'set checkout true');
    }
  };

  const setTotals = () => {
    try {
      dispatch({
        type: 'SET_TOTALS',
      });
    } catch (err) {
      console.error(err, 'set totals');
    }
  };

  const setCustomerName = (name) => {
    try {
      dispatch({
        type: 'SET_CUSTOMER_NAME',
        payload: name,
      });
    } catch (err) {
      console.error(err, 'orderCustomer');
    }
  };

  const setPaymentType = (type) => {
    try {
      dispatch({
        type: 'SET_PAYMENT_TYPE',
        payload: type,
      });
    } catch (err) {
      console.error(err, 'set payment type');
    }
  };

  const resetPos = () => {
    try {
      dispatch({
        type: 'RESET',
      });
    } catch (err) {
      console.error(err, 'reset');
    }
  };

  return (
    <PosGlobalContext.Provider
      value={{
        order: state.order,
        items: state.items,
        itemEditKey: state.itemEditKey,
        orderItems: state.orderItems,
        orderTotal: state.orderTotal,
        categories: state.categories,
        categoryKey: state.categoryKey,
        orderItemKey: state.orderItemKey,
        setCategoryKey,
        loadCategories,
        loadInventory,
        postCategories,
        displayItem,
        displayItemKey: state.displayItemKey,
        minusNumberOfItems,
        addNumberOfItems,
        numberOfItemsForOrder: state.numberOfItemsForOrder,
        addToOrder,
        falseReviewOrder,
        trueReviewOrder,
        reviewOrder: state.reviewOrder,
        updateOrderItem,
        orderLocationId: state.orderLocationId,
        orderLatitude: state.orderLatitude,
        orderLongitude: state.orderLongitude,
        orderLocationNickname: state.orderLocationNickname,
        getCurrentLocation,
        menuItemSelect: state.menuItemSelect,
        setSelectedFalse,
        setSelectedTrue,
        resetCount,
        setCheckout,
        checkout: state.checkout,
        setTotals,
        orderTax: state.orderTax,
        orderTotalWithTax: state.orderTotalWithTax,
        setCustomerName,
        setPaymentType,
        postOrder,
        resetPos,
      }}
    >
      {children}
    </PosGlobalContext.Provider>
  );
};

// Ajax
// get all from categories
// get all from inventories
// get all from orderItems
// ----/---- from sales page, view orders in each sale

// post new item to inventory (if new category, to categories)
// ---- add item option on inventory page

// post new order to orders and ordersByLocation and orderItems
// --- when order is paid for from Checkout page
// ----/---- populate orders
// ----/---- populate order info to by location
// ----/---- populate order id and items to orderItems
