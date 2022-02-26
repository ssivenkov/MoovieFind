import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getAuthUserData } from 'store/thunks/authThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const SearchPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUserData());
  }, []);
  return <div>Search</div>;
};
