import React from 'react';

import { castPersonPhoto } from 'api/config';

import {
  StyledCastCardContainer,
  StyledName,
  StyledPoster,
  StyledRole,
  StyledTextContainer,
} from './styles';
import { CastCardPropsType } from './types';

export const CastCard = (props: CastCardPropsType) => {
  const { character, name, profile_path } = props;

  return (
    <StyledCastCardContainer>
      <StyledPoster alt={name} src={`${castPersonPhoto}${profile_path}`} />
      <StyledTextContainer>
        <StyledName>{name}</StyledName>
        <StyledRole>{character}</StyledRole>
      </StyledTextContainer>
    </StyledCastCardContainer>
  );
};
