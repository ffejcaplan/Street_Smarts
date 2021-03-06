// /* eslint-disable default-case */

export default (state, action) => {
  switch (action.type) {
    case 'LOAD_LOCATIONS':
      return {
        ...state,
        locations: action.payload,
      };
    case 'SET_CURRENT_LOCATION':
      return {
        ...state,
        currentLocation: action.payload,
      };
    case 'CHOOSED_SAVED':
      return {
        ...state,
        selected: true,
      };
    case 'CHOOSE_CURRENT_LOCATION':
      return {
        ...state,
        selected: true,
        newLocation: true,
      };
    case 'CHOOSE_BACK':
      return {
        ...state,
        selected: false,
        newLocation: false,
      };

    case 'TOGGLE_PIN':
      return {
        ...state,
        pinned: true,
        pinnedStatus: true,
      };
    case 'RESET_PIN':
      return {
        ...state,
        pinned: false,
        pinnedStatus: false,
      };
    case 'PINNED_STATUS':
      return {
        ...state,
        pinnedStatus: action.payload.pinnedStatus,
        activeLocation: action.payload.activeLocation,
      };

    default:
      return state;
  }
};
