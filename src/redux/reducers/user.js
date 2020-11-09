const initialState = {
  user: {},
  token: null,
};
const user = (state = initialState, action) => {
  const actions = {
    LOGIN: {
      ...state,
      token: action.payload,
    },
    LOGOUT: {
      initialState
    },
    READ_USER: {
      ...state,
      user: action.payload,
    }
  };
  return Object.keys(actions).includes(action.type)
    ? actions[action.type]
    : state;
};

export default user;
