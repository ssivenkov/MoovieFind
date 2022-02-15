import { ThunkDispatch } from 'redux-thunk';

import { MooviesAPI } from 'api/MooviesApi';
import { TempRequestObjType } from 'components/RoutesContainer/RoutesContainer';
import { ONE, TWO } from 'constants/common';
import { FilmsActionsType, setFilms } from 'store/actions/filmActions';
import { AppRootStateType } from 'store/store';

export const getMoovies =
  (tempRequestObj: TempRequestObjType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, FilmsActionsType>) => {
    // eslint-disable-next-line no-param-reassign
    tempRequestObj.page = tempRequestObj.page * TWO - ONE;
    const response1 = await MooviesAPI.getPopularMoovies(tempRequestObj);
    const tempNextPageRequestObj = { ...tempRequestObj };
    tempNextPageRequestObj.page += ONE;
    const response2 = await MooviesAPI.getPopularMoovies(tempNextPageRequestObj);
    const resultResponse = [...response1.data.results, ...response2.data.results];
    dispatch(setFilms(resultResponse));
  };
