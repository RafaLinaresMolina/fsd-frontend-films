const initialState = {
  profile: {},
  orders: [],
};
const profile = (state = initialState, action) => {
  const actions = {
    SET_PROFILE: {
      ...state,
      profile: action.payload,
    },
    UPDATE_PROFILE: {
      ...state,
      profile: action.payload,
    },
    SET_PROFILE_ORDERS: {
      ...state,
      orders: action.payload,
    },
    CLEAR_ALL_PROFILE_INFO: {
      ...state,
      profile: initialState.profile,
      orders: initialState.orders,
    }
  };
  return Object.keys(actions).includes(action.type)
    ? actions[action.type]
    : state;
};

export default profile;
