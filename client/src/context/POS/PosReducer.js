/* eslint-disable default-case */

export default (state, action) => {
  switch (action.type) {
    case 'LOAD_INVENTORY':
      return {
        ...state,
        items: action.payload,
      };

    case 'LOAD_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };

    case 'POST_CATEGORY':
      return {
        ...state,
        categories: [...state, action.payload],
      };
    case 'SET_CATEGORY_KEY':
      return {
        ...state,
        categoryKey: action.payload,
      };
    case 'DISPLAY_ITEM':
      return {
        ...state,
        displayItemKey: action.payload,
      };
    case 'MINUS_NUMBER':
      return {
        ...state,
        numberOfItemsForOrder: state.numberOfItemsForOrder - 1,
      };
    case 'ADD_NUMBER':
      return {
        ...state,
        numberOfItemsForOrder: state.numberOfItemsForOrder + 1,
      };
    case 'ADD_TO_ORDER':
      return {
        ...state,
        orderItemDisplay: (state.orderItemDisplay += `[${action.payload.toDisplay}],`),
        numberOfItemsForOrder: 1,
        orderItem: action.payload.forOrders,
      };

    default:
      return state;
  }
};
