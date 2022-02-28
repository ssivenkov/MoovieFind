import { TRENDING_ACTIONS } from 'enums/trendingEnum';
import {
  SetTrendingMoviesActionType,
  SetTrendingTVShowsActionType,
} from 'types/actions/trendingActionsTypes';
import { MovieType } from 'types/reducers/movieReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

export const setTrendingMovies = (
  trendingMovies: Array<MovieType>,
): SetTrendingMoviesActionType =>
  ({
    type: TRENDING_ACTIONS.SET_TRENDING_MOVIES,
    trendingMovies,
  } as const);

export const setTrendingTVShows = (
  trendingTVShows: Array<TVShowType>,
): SetTrendingTVShowsActionType =>
  ({
    type: TRENDING_ACTIONS.SET_TRENDING_TVSHOWS,
    trendingTVShows,
  } as const);
