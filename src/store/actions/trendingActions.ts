import {
  setTrendingMoviesActionType,
  setTrendingTVShowsActionType,
} from 'types/actions/trendingActionsTypes';
import { MovieType } from 'types/reducers/movieReducerType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

export enum TRENDING_ACTIONS {
  SET_TRENDING_MOVIES = 'trendingReducer/SET_TRENDING_MOVIES',
  SET_TRENDING_TVSHOWS = 'trendingReducer/SET_TRENDING_TVSHOWS',
}

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
