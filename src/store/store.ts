import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { appReducer } from 'store/reducers/appReducer';
import { mainReducer } from 'store/reducers/mainReducer';
import { movieReducer } from 'store/reducers/movieReducer';
import { moviesReducer } from 'store/reducers/moviesReducer';
import { peopleReducer } from 'store/reducers/peopleReducer';
import { trendingReducer } from 'store/reducers/trendingReducer';
import { TVShowsReducer } from 'store/reducers/TVShowsReducer';
import { AppActionsTypes } from 'types/actions/appActionsTypes';
import { MainActionsTypes } from 'types/actions/mainActionsTypes';
import { MovieActionsTypes } from 'types/actions/movieActionsTypes';
import { MoviesActionsTypes } from 'types/actions/moviesActionsTypes';
import { PeopleActionsType } from 'types/actions/peopleActionsTypes';
import { TrendingActionsType } from 'types/actions/trendingActionsTypes';
import { TVShowsActionsType } from 'types/actions/TVShowActionsTypes';

const rootReducer = combineReducers({
  app: appReducer,
  main: mainReducer,
  movies: moviesReducer,
  movie: movieReducer,
  TVShows: TVShowsReducer,
  trending: trendingReducer,
  people: peopleReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType =
  | AppActionsTypes
  | MainActionsTypes
  | MoviesActionsTypes
  | MovieActionsTypes
  | TrendingActionsType
  | TVShowsActionsType
  | PeopleActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
