import { ONE } from 'constants/common';
import { TRENDING_ACTIONS } from 'enums/trendingEnum';
import { TrendingActionsType } from 'types/actions/trendingActionsTypes';
import { InitialMoviesStateType } from 'types/reducers/trendingReducerTypes';

const initialTrendingState = {
  trendingMovies: [],
  trendingTVShows: [],
  sliderPage: ONE,
};

export const trendingReducer = (
  state: InitialMoviesStateType = initialTrendingState,
  action: TrendingActionsType,
): InitialMoviesStateType => {
  switch (action.type) {
    case TRENDING_ACTIONS.SET_TRENDING_MOVIES:
      return { ...state, trendingMovies: action.trendingMovies };
    case TRENDING_ACTIONS.SET_TRENDING_TVSHOWS:
      return { ...state, trendingTVShows: action.trendingTVShows };
    default:
      return state;
  }
};
