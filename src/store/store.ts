import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { appReducer } from 'store/reducers/appReducer/appReducer';
import { AppReducerActionsType } from 'store/reducers/appReducer/types';
import { mainReducer } from 'store/reducers/mainReducer/mainReducer';
import { MainReducerActionsType } from 'store/reducers/mainReducer/types';
import { movieReducer } from 'store/reducers/movieReducer/movieReducer';
import { MovieReducerActionsType } from 'store/reducers/movieReducer/types';
import { moviesReducer } from 'store/reducers/moviesReducer/moviesReducer';
import { MoviesReducerActionsType } from 'store/reducers/moviesReducer/types';
import { peopleReducer } from 'store/reducers/peopleReducer/peopleReducer';
import { PeopleReducerActionsType } from 'store/reducers/peopleReducer/types';
import { trendingReducer } from 'store/reducers/trendingReducer/trendingReducer';
import { TrendingReducerActionsType } from 'store/reducers/trendingReducer/types';
import { tvShowsReducer } from 'store/reducers/tvShowsReducer/tvShowsReducer';
import { TVShowsReducerActionsType } from 'store/reducers/tvShowsReducer/types';

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
