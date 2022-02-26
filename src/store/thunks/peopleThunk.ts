import { ThunkDispatch } from 'redux-thunk';

import { PeopleAPI } from 'api/PeopleAPI';
import { ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setPeople } from 'store/actions/peopleActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';

export const getPeople =
  (tempRequestObj: RequestObjectType): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const requestObj = { ...tempRequestObj };
      requestObj.page = tempRequestObj.page * TWO - ONE;
      const response1 = await PeopleAPI.getPeople(tempRequestObj);
      const tempNextPageRequestObj = { ...tempRequestObj };
      tempNextPageRequestObj.page += ONE;
      const response2 = await PeopleAPI.getPeople(tempNextPageRequestObj);
      const resultResponse = [...response1.data.results, ...response2.data.results];
      await dispatch(setPeople(resultResponse));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting people. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
