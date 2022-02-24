import { TRENDING_ACTIONS } from 'enums/trendingEnums';
import {
  setTrendingMoviesActionType,
  setTrendingTVShowsActionType,
} from 'types/actions/trendingActionsTypes';
import { MovieType } from 'types/reducers/movieReducerType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

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
