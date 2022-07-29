import { ThunkDispatch } from 'redux-thunk';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { setSearchImageLinkAction } from 'store/actions/mainReducerActions/setSearchImageLinkAction';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';
import { AppRootActionsType, AppRootStateType, AppThunk } from 'store/store';

export const setRandomSearchBackgroundImage =
  (lists: Array<TVShowType[]>): AppThunk =>
  (dispatch: ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>) => {
    try {
      const unfoldedLists = [...lists.flat()];
      const links = unfoldedLists.map((movie) => movie.backdrop_path);
      const filteredLinks = links.filter((movie) => movie !== null);
      const randomNumber = Math.floor(Math.random() * filteredLinks.length);
      const searchImageLink = filteredLinks[randomNumber];

      if (searchImageLink !== null) {
        dispatch(setSearchImageLinkAction({ searchImageLink }));
      }
    } catch (error) {
      setModalTextAction({
        modalText: `Error setting random search background image. ${error}`,
      });
    }
  };
