import { ThunkDispatch } from 'redux-thunk';

import { TVShowsAPI } from 'api/TVShowsAPI';
import { ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setTVShows } from 'store/actions/TVShowActions';
import { AppRootActionsType, AppRootStateType } from 'store/store';
import { RequestObjectType } from 'types/RequestObjectType';

export const getTVShows =
  (tempRequestObj: RequestObjectType) =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await TVShowsAPI.getPopularTVs(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await TVShowsAPI.getPopularTVs(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setTVShows(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting TWShows. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
