export default (state, action) => {
  switch (action.type) {
    case 'LOAD_SALES':
      return {
        ...state,
        sales: action.payload,
      };
    case 'LOAD_BY_LOCATION':
      return {
        ...state,
        byLocation: action.payload,
      };
    default:
      return state;
  }
};
