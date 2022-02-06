import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setErrorMessage } from 'store/actions/mainActions';
import { AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const ErrorAll = (): ReturnComponentType => {
  const error = useSelector<AppRootStateType, boolean>(state => state.main.error);
  const textError = useSelector<AppRootStateType, string>(state => state.main.textError);
  const dispatch = useDispatch();
  const deleteMessageError = (): any => dispatch(setErrorMessage(false, ''));
  const time = 3000;
  useEffect(() => {
    setTimeout(deleteMessageError, time);
  }, [error]);

  return (
    <div>
      {error && (
        <div>
          <h1>Error:</h1>
          <h2>{textError}</h2>
        </div>
      )}
    </div>
  );
};
