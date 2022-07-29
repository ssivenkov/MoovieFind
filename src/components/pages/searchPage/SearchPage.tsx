import React, { useEffect } from 'react';

import {
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles/Styles';
import { useDispatch } from 'react-redux';
import { getAuthUserData } from 'store/thunks/authThunk';
import { ComponentType } from 'types/common/componentType';

export const SearchPage = (): ComponentType => {
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
