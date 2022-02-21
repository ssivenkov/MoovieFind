import { MOVIES_ACTIONS } from 'store/actions/movieActions';
import { MoviesActionsTypes } from 'types/actions/moviesActionsTypes';
import { InitialMoviesStateType } from 'types/reducers/movieReducerType';

const initialMoviesState = {
  movies: [],
  currentPage: 1,
};

export const moviesReducer = (
  state: InitialMoviesStateType = initialMoviesState,
  action: MoviesActionsTypes,
): InitialMoviesStateType => {
  switch (action.type) {
    case MOVIES_ACTIONS.SET_MOVIES:
      return { ...state, movies: action.movies };
    default:
      return state;
  }
};
