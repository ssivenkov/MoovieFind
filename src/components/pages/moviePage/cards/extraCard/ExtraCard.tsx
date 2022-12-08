import React from 'react';

import { StyledExtraCardContainer, StyledTitle } from './styles';
import { ExtraCardPropsType } from './types';

export const ExtraCard = (props: ExtraCardPropsType) => {
  const { linkTo } = props;

  return (
    <StyledExtraCardContainer to={linkTo}>
      <StyledTitle>View more</StyledTitle>
    </StyledExtraCardContainer>
  );
};
