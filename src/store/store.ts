import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { AppActionsType } from './actions/appActions';
import { FilmsActionsType } from './actions/filmActions';
import { appReducer } from './reducers/appReducer';
import { filmsReducer } from './reducers/filmsReducer';

const rootReducer = combineReducers({
  app: appReducer,
  films: filmsReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppRootActionsType = AppActionsType | FilmsActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
