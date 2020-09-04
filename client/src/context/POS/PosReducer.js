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

    case 'RESET_COUNT':
      return {
        ...state,
        numberOfItemsForOrder: 1,
      };
    case 'ADD_TO_ORDER':
      const orderItems = [...state.orderItems, action.payload];
      return {
        ...state,

        numberOfItemsForOrder: 1,
        orderItems: orderItems,
        orderTotal: orderItems.reduce((total, currentItem) => {
          const itemTotal = currentItem.numberOfItem * currentItem.price;
          return total + itemTotal;
        }, 0),
        itemKeyIncrement: state.itemKeyIncrement + 1,
        // orderItemKey: state.orderItems.length,
      };
    case 'FALSE_REVIEW_ORDER':
      return {
        ...state,
        reviewOrder: false,
      };
    case 'TRUE_REVIEW_ORDER':
      return {
        ...state,
        itemEditKey: parseInt(action.payload),
        reviewOrder: true,
      };
    case 'UPDATE_ORDER_ITEM':
      return {
        ...state,
        orderItems: action.payload[0],
        orderTotal: action.payload[1],
      };
    case 'GET_CURRENT_LOCATION':
      return {
        ...state,
        orderLocationId: action.payload.id,
        orderLongitude: action.payload.longitude,
        orderLatitude: action.payload.latitude,
        orderLocationNickname: action.payload.nickname,
      };
    case 'SET_SELECTED_FALSE':
      return {
        ...state,
        menuItemSelect: false,
      };

    case 'SET_SELECTED_TRUE':
      return {
        ...state,
        menuItemSelect: true,
      };

    case 'SET_CHECKOUT':
      return {
        ...state,
        checkout: action.payload,
      };
    // return {
    //   ...state,
    //   orderTotal: newTotal,
    // };
    default:
      return state;
  }
};
