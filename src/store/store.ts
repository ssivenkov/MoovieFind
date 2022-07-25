import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { AppReducerActionsType } from './reducers/appReducer/types';
import { MainReducerActionsType } from './reducers/mainReducer/types';
import { MoviesReducerActionsType } from './reducers/moviesReducer/types';
import { PeopleReducerActionsType } from './reducers/peopleReducer/types';
import { TrendingReducerActionsType } from './reducers/trendingReducer/types';
import { TVShowsReducerActionsType } from './reducers/tvShowsReducer/types';

import { appReducer } from 'store/reducers/appReducer/appReducer';
import { mainReducer } from 'store/reducers/mainReducer/mainReducer';
import { movieReducer } from 'store/reducers/movieReducer/movieReducer';
import { MovieReducerActionsType } from 'store/reducers/movieReducer/types';
import { moviesReducer } from 'store/reducers/moviesReducer/moviesReducer';
import { peopleReducer } from 'store/reducers/peopleReducer/peopleReducer';
import { trendingReducer } from 'store/reducers/trendingReducer/trendingReducer';
import { tvShowsReducer } from 'store/reducers/tvShowsReducer/tvShowsReducer';

const rootReducer = combineReducers({
  app: appReducer,
  main: mainReducer,
  movies: moviesReducer,
  movie: movieReducer,
  tvShows: tvShowsReducer,
  trending: trendingReducer,
  people: peopleReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType =
  | AppReducerActionsType
  | MainReducerActionsType
  | MovieReducerActionsType
  | MoviesReducerActionsType
  | PeopleReducerActionsType
  | TrendingReducerActionsType
  | TVShowsReducerActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
