const initialState = {
  allOrders: [],
  allUsers: []
};
const user = (state = initialState, action) => {
  const actions = {
    SET_ALL_USERS: {
      ...state,
      allUsers: action.payload,
    },
    SET_ALL_ORDERS: {
      ...state,
      allOrders: action.payload,
    },
    UPDATE_ALL_USERS: {
      ...state,
      allUsers: action.payload,
    },
    UPDATE_ALL_ORDERS: {
      ...state,
      allOrders: action.payload,
    },
    CLEAR_ALL_ADMIN_INFO: {
      initialState
    }
  };
  return Object.keys(actions).includes(action.type)
    ? actions[action.type]
    : state;
};

export default user;
