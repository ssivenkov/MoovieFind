import React from 'react';

import { ComponentType } from 'types/common/componentType';

import {
  StyledContainer,
  StyledPosterLightContainer,
  StyledEmptyPoster,
  StyledInfoContainer,
  StyledLink,
  StyledPosterText,
} from './styles';
import { ExtraCardPropsType } from './types';

export const ExtraCard = (props: ExtraCardPropsType): ComponentType => {
  const { title, link } = props;

  return (
    <StyledLink to={link}>
      <StyledContainer>
        <StyledInfoContainer>
          <StyledPosterText>{title}</StyledPosterText>
        </StyledInfoContainer>
        <StyledPosterLightContainer>
          <StyledEmptyPoster />
        </StyledPosterLightContainer>
      </StyledContainer>
    </StyledLink>
  );
};
