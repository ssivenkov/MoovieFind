import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles/Styles';
import { getAuthUserData } from 'store/thunks/authThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const SearchPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUserData());
  }, []);
  return (
    <StyledSectionTitleContainer>
      <StyledSectionTitle>Search</StyledSectionTitle>
    </StyledSectionTitleContainer>
  );
};
