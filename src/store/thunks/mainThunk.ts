import { ThunkDispatch } from 'redux-thunk';

import { setSearchImageLink } from 'store/actions/mainActions';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const setRandomSearchBackgroundImage =
  (data: Array<any>): AppThunk =>
  async (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const argsArr = [...data.flat()];
      const linksArr = argsArr.map(movie => movie.backdrop_path);
      const filteredLinksArr = linksArr.filter(movie => movie !== null);
      const randomNumber = Math.floor(Math.random() * filteredLinksArr.length);
      dispatch(setSearchImageLink(filteredLinksArr[randomNumber]));
    } catch (error) {
      console.log(`Error setting random search background image. ${error}`);
    }
  };
