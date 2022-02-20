import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { AppActionsType } from 'store/actions/appActions';
import { LatestTrailersActionsType } from 'store/actions/latestTrailersActions';
import { MainActionsType } from 'store/actions/mainActions';
import { MoviesActionsType } from 'store/actions/movieActions';
import { TrendingActionsType } from 'store/actions/trendingActions';
import { TVShowsActionsType } from 'store/actions/TVShowActions';
import { appReducer } from 'store/reducers/appReducer';
import { latestTrailersReducer } from 'store/reducers/latestTrailersReducer';
import { mainReducer } from 'store/reducers/mainReducer';
import { moviesReducer } from 'store/reducers/moviesReducer';
import { trendingReducer } from 'store/reducers/trendingReducer';
import { TVShowsReducer } from 'store/reducers/TVShowsReducer';

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
  | AppActionsType
  | MoviesActionsType
  | TVShowsActionsType
  | LatestTrailersActionsType
  | TrendingActionsType
  | MainActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
