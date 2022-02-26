import { TRENDING_ACTIONS } from 'enums/trendingEnum';
import {
  setTrendingMoviesActionType,
  setTrendingTVShowsActionType,
} from 'types/actions/trendingActionsTypes';
import { MovieType } from 'types/reducers/movieReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const setTrendingMovies = (
  trendingMovies: Array<MovieType>,
): setTrendingMoviesActionType =>
  ({
    type: TRENDING_ACTIONS.SET_TRENDING_MOVIES,
    trendingMovies,
  } as const);

export const setTrendingTVShows = (
  trendingTVShows: Array<TVShowType>,
): setTrendingTVShowsActionType =>
  ({
    type: TRENDING_ACTIONS.SET_TRENDING_TVSHOWS,
    trendingTVShows,
  } as const);
