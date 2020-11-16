const initialState = {
    items: [],
}

const reducer = (state = initialState, action) => {
  const actions = {
    SET_ITEM: {
      ...state,
      items: [...state.items, action.payload]
    },
    REMOVE_ITEM: {
      ...state,
      items: action.payload,
    },
    CLEAR_CART: {
      ...state,
      items: initialState.items,
    },
  };
  return Object.keys(actions).includes(action.type)
    ? actions[action.type]
    : state;
};

export default reducer;
