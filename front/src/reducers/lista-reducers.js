import { RECEIVE_MOVIES, RECEIVE_SINGLEMOVIE, LOG_USER, SET_FAVS } from "../constants";

const initialState = {
  lista: [],
  movie: {},
  user: {},
  favs:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return { ...state, lista: action.movies };
    case RECEIVE_SINGLEMOVIE:
      return { ...state, movie: action.movie };
    case LOG_USER:
      return { ...state, user: action.user };
    case SET_FAVS:
      return { ...state, favs: action.favs };
    default:
      return state;
  }
};
