import { ThunkDispatch } from 'redux-thunk';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { PeopleAPI } from 'api/PeopleAPI';
import { MaxItemsCount, MaxPagesCount, ONE, TWO } from 'constants/common';
import { appContentInitializedTrue, appInitializedTrue } from 'store/actions/appActions';
import { setPeopleData } from 'store/actions/peopleActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const getPeople =
  (): AppThunk =>
  async (
    dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>,
    getState,
  ) => {
    const { language } = getState().app;
    const page = getState().people.currentPage;
    const requestObj = { api_key, language, page };
    try {
      const pageOneRequestObject = { ...requestObj };
      pageOneRequestObject.page = pageOneRequestObject.page * TWO - ONE;
      const peopleListResponse1 = await PeopleAPI.getPeopleData(pageOneRequestObject);
      if (peopleListResponse1.data.total_pages > MaxPagesCount) {
        peopleListResponse1.data.total_pages = MaxPagesCount;
      }
      if (peopleListResponse1.data.total_results > MaxItemsCount) {
        peopleListResponse1.data.total_results = MaxItemsCount;
      }
      const resultPeopleData = peopleListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };
      pageTwoRequestObject.page = pageOneRequestObject.page + ONE;
      const peopleListResponse2 = await PeopleAPI.getPeopleData(pageTwoRequestObject);
      resultPeopleData.results = [
        ...peopleListResponse1.data.results,
        ...peopleListResponse2.data.results,
      ];
      await dispatch(setPeopleData(resultPeopleData));
      dispatch(appContentInitializedTrue());
    } catch (error) {
      console.log(`Error getting people. ${error}`);
    } finally {
      dispatch(appInitializedTrue());
    }
  };
