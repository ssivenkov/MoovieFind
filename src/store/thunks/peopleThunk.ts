import { MAX_ITEMS_COUNT, MAX_PAGES_COUNT } from 'constants/common';

import { api_key } from 'api/config';
import { PeopleAPI } from 'api/PeopleAPI/PeopleAPI';
import { ThunkDispatch } from 'redux-thunk';
import { setAppContentInitializeAction } from 'store/actions/appReducerActions/appContentInitializeAction';
import { setAppInitializeAction } from 'store/actions/appReducerActions/setAppInitializeAction';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { setPeopleDataAction } from 'store/actions/peopleReducerActions/setPeopleDataAction';
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

      pageOneRequestObject.page = pageOneRequestObject.page * 2 - 1;
      const peopleListResponse1 = await PeopleAPI.getPeopleData(pageOneRequestObject);

      if (peopleListResponse1.data.total_pages > MAX_PAGES_COUNT) {
        peopleListResponse1.data.total_pages = MAX_PAGES_COUNT;
      }

      if (peopleListResponse1.data.total_results > MAX_ITEMS_COUNT) {
        peopleListResponse1.data.total_results = MAX_ITEMS_COUNT;
      }

      const resultPeopleData = peopleListResponse1.data;
      const pageTwoRequestObject = { ...requestObj };

      pageTwoRequestObject.page = pageOneRequestObject.page + 1;
      const peopleListResponse2 = await PeopleAPI.getPeopleData(pageTwoRequestObject);

      resultPeopleData.results = [
        ...peopleListResponse1.data.results,
        ...peopleListResponse2.data.results,
      ];

      dispatch(setPeopleDataAction({ peopleData: resultPeopleData }));
      dispatch(setAppContentInitializeAction({ contentInitialized: true }));
    } catch (error) {
      setModalTextAction({ modalText: `Error getting people. ${error}` });
    } finally {
      dispatch(setAppInitializeAction({ appInitialized: true }));
    }
  };
