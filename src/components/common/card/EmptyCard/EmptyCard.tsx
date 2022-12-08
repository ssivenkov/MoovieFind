import React from 'react';

import { ComponentType } from 'types/common/componentType';

import { StyledContainer, StyledEmptyPoster, StyledTitle } from './styles';

export const EmptyCard = (): ComponentType => (
  <StyledContainer>
    <StyledEmptyPoster />
    <StyledTitle>Movie</StyledTitle>
  </StyledContainer>
);
