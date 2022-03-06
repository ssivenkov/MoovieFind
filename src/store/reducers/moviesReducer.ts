import { CardsCountInOnePage, ONE, ZERO } from 'constants/common';
import { MOVIES_ACTIONS } from 'enums/moviesEnum';
import { MoviesActionsTypes } from 'types/actions/moviesActionsTypes';
import { InitialMoviesStateType } from 'types/reducers/movieReducerTypes';

const initialMoviesState = {
  moviesList: [],
  currentPage: ONE,
  moviesCountInOnePage: CardsCountInOnePage,
  totalMoviesCount: ZERO,
};

export const moviesReducer = (
  state: InitialMoviesStateType = initialMoviesState,
  action: MoviesActionsTypes,
): InitialMoviesStateType => {
  switch (action.type) {
    case MOVIES_ACTIONS.SET_MOVIES_DATA:
      return {
        ...state,
        moviesList: action.moviesData.results,
        totalMoviesCount: action.moviesData.total_results,
      };
    case MOVIES_ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};
