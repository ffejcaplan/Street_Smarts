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
    default:
      return state;
  }
};
