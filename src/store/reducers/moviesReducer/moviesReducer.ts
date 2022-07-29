import { CARDS_PER_PAGE } from 'constants/common';

import { MOVIES_ACTIONS } from 'enums/moviesEnum';
import {
  MoviesReducerActionsType,
  MoviesReducerStateType,
} from 'store/reducers/moviesReducer/types';

const moviesReducerState = {
  moviesList: [],
  currentPage: 1,
  moviesCountInOnePage: CARDS_PER_PAGE,
  totalMoviesCount: 0,
};

export const moviesReducer = (
  state: MoviesReducerStateType = moviesReducerState,
  action: MoviesReducerActionsType,
): MoviesReducerStateType => {
  switch (action.type) {
    case MOVIES_ACTIONS.SET_MOVIES_DATA:
      return {
        ...state,
        moviesList: action.payload.moviesData.results,
        totalMoviesCount: action.payload.moviesData.total_results,
      };
    case MOVIES_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload.currentPage };
    default:
      return state;
  }
};
