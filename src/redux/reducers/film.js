const initialState = {
  films: {
    count: 0,
    stored: 0,
    rows: [],
  },
  filmsByTitle: {
    count: 0,
    stored: 0,
    rows: [],
  },
  filmsByGenre: {
    count: 0,
    stored: 0,
    rows: [],
  },
  filmsByActor: {
    count: 0,
    stored: 0,
    rows: [],
  },
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
    SET_FILMS_BY_TITLE: {
      ...state,
      filmsByTitle: action.payload,
    },
    UPDATE_FILMS_BY_TITLE: {
      ...state,
      filmsByTitle: action.payload,
    },
    SET_FILMS_BY_GENRE: {
      ...state,
      filmsByGenre: action.payload,
    },
    UPDATE_FILMS_BY_GENRE: {
      ...state,
      filmsByGenre: action.payload,
    },
    SET_FILMS_BY_ACTOR: {
      ...state,
      filmsByActor: action.payload,
    },
    UPDATE_FILMS_BY_ACTOR: {
      ...state,
      filmsByActor: action.payload,
    },
    CLEAR_ALL_FILMS: {
      ...state,
      films: initialState.films,
      filmsByTitle: initialState.filmsByTitle,
      filmsByActor: initialState.filmsByActor,
      filmsByGenre: initialState.filmsByGenre,
    },
  };
  return Object.keys(actions).includes(action.type)
    ? actions[action.type]
    : state;
};

export default reducer;
