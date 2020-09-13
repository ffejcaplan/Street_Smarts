export default (state, action) => {
  switch (action.type) {
    case 'LOAD_SALES':
      return {
        ...state,
        sales: action.payload,
      };
    case 'LOAD_LOCATIONS':
      return {
        ...state,
        locations: action.payload,
      };

    default:
      return state;
  }
};
