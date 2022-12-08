import React from 'react';

import { image1280 } from 'api/config';
import { ComponentType } from 'types/common/componentType';

import {
  StyledEmptyPosterContainer,
  StyledEmptyPosterText,
  StyledPoster,
} from './styles';
import { PosterPropsType } from './types';

export const Poster = (props: PosterPropsType): ComponentType => {
  const { posterLink } = props;

  return posterLink ? (
    <StyledPoster src={`${image1280}${posterLink}`} />
  ) : (
    <StyledEmptyPosterContainer>
      <StyledEmptyPosterText>No poster</StyledEmptyPosterText>
    </StyledEmptyPosterContainer>
  );
};
