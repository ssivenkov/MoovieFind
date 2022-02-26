import { ONE } from 'constants/common';
import { MOVIES_ACTIONS } from 'enums/moviesEnum';
import { MoviesActionsTypes } from 'types/actions/moviesActionsTypes';
import { InitialMoviesStateType } from 'types/reducers/movieReducerTypes';

const initialMoviesState = {
  movies: [],
  currentPage: ONE,
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
