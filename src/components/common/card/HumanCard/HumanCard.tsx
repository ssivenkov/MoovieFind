import React from 'react';

import { image300x450 } from 'api/config';
import { ComponentType } from 'types/common/componentType';

import {
  StyledContainer,
  StyledContainerContainer,
  StyledEmptyPoster,
  StyledEmptyPosterTitle,
  StyledInfoContainer,
  StyledName,
  StyledPoster,
  StyledPosterLightContainer,
  StyledRate,
} from './styles';
import { HumanCardPropsType } from './types';

export const HumanCard = (props: HumanCardPropsType): ComponentType => {
  const { name, profilePath, popularity } = props;

  return (
    <StyledContainer>
      <StyledContainerContainer>
        <StyledInfoContainer>
          <StyledRate popularity={popularity}>
            {popularity === 0 ? 'Not rated' : popularity}
          </StyledRate>
        </StyledInfoContainer>
        <StyledPosterLightContainer nullContent={profilePath === null}>
          {profilePath === null ? (
            <StyledEmptyPoster>
              <StyledEmptyPosterTitle>No photo</StyledEmptyPosterTitle>
            </StyledEmptyPoster>
          ) : (
            <StyledPoster alt={`${name} photo`} src={`${image300x450}${profilePath}`} />
          )}
        </StyledPosterLightContainer>
      </StyledContainerContainer>
      <StyledName>{name}</StyledName>
    </StyledContainer>
  );
};
