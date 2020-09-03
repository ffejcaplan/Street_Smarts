export default (state, action) => {
  switch (action.type) {
    case 'LOAD_SALES':
      return {
        ...state,
        sales: action.payload,
      };
    default:
      return state;
  }
};
