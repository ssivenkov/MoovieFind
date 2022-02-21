import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { appReducer } from 'store/reducers/appReducer';
import { latestTrailersReducer } from 'store/reducers/latestTrailersReducer';
import { mainReducer } from 'store/reducers/mainReducer';
import { moviesReducer } from 'store/reducers/moviesReducer';
import { trendingReducer } from 'store/reducers/trendingReducer';
import { TVShowsReducer } from 'store/reducers/TVShowsReducer';
import { AppActionsTypes } from 'types/actions/appActionsTypes';
import { LatestTrailersActionsTypes } from 'types/actions/latestTrailersActionsTypes';
import { MainActionsTypes } from 'types/actions/mainActionsTypes';
import { MoviesActionsTypes } from 'types/actions/moviesActionsTypes';
import { TrendingActionsType } from 'types/actions/trendingActionsTypes';
import { TVShowsActionsType } from 'types/actions/TVShowActionsTypes';

const rootReducer = combineReducers({
  app: appReducer,
  movies: moviesReducer,
  TVShows: TVShowsReducer,
  main: mainReducer,
  latestTrailers: latestTrailersReducer,
  trending: trendingReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType =
  | AppActionsTypes
  | MoviesActionsTypes
  | LatestTrailersActionsTypes
  | TrendingActionsType
  | MainActionsTypes
  | TVShowsActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
