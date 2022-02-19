import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { AppActionsType } from './actions/appActions';
import { LatestTrailersActionsType } from './actions/latestTrailersActions';
import { MainActionsType } from './actions/mainActions';
import { MoviesActionsType } from './actions/movieActions';
import { TVShowsActionsType } from './actions/TVShowActions';
import { appReducer } from './reducers/appReducer';
import { latestTrailersReducer } from './reducers/latestTrailersReducer';
import { mainReducer } from './reducers/mainReducer';
import { moviesReducer } from './reducers/moviesReducer';
import { TVShowsReducer } from './reducers/TVShowsReducer';

const rootReducer = combineReducers({
  app: appReducer,
  movies: moviesReducer,
  TVShows: TVShowsReducer,
  main: mainReducer,
  latestTrailers: latestTrailersReducer,
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
  | MainActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
