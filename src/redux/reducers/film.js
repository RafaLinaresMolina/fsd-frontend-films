const initialState = {
  films: [],
};
const reducer = (state = initialState, action) => {
  const actions = {
    SET_FILMS: {
      ...state,
      films: action.payload,
    },
    UPDATE_FILMS: {
      ...state,
      films: action.payload,
    },

  };
  return Object.keys(actions).includes(action.type)
    ? actions[action.type]
    : state;
};

export default reducer;
