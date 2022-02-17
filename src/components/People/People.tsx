import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getAuthUserData } from 'store/thunks/authThunk';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const People = (): ReturnComponentType => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUserData());
  }, []);
  return <div>People</div>;
};
