import { ThunkDispatch } from 'redux-thunk';

import { MooviesAPI } from 'api/MooviesApi';
import { TempObjType } from 'components/RoutesContainer/RoutesContainer';
import { FilmsActionsType, setFilms } from 'store/actions/filmActions';
import { AppRootStateType } from 'store/store';

export const getMoovies =
  (tempObj: TempObjType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, FilmsActionsType>) => {
    const response = await MooviesAPI.getPopularMoovies(tempObj);
    console.log(response.data.results);
    dispatch(setFilms(response.data.results));
  };
