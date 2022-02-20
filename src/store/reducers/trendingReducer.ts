import { TRENDING_ACTIONS, TrendingActionsType } from 'store/actions/trendingActions';
import { MovieType } from 'store/reducers/moviesReducer';
import { TVShowType } from 'store/reducers/TVShowsReducer';

export type InitialMoviesStateType = {
  trendingMovies: Array<MovieType>;
  trendingTVShows: Array<TVShowType>;
  sliderPage: number;
};

const initialTrendingState = {
  trendingMovies: [],
  trendingTVShows: [],
  sliderPage: 1,
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
