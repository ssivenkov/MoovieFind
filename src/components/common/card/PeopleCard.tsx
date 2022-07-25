import React, { FC } from 'react';

import styled from 'styled-components';

import { image300x450 } from 'api/config';
import {
  StyledCardTitle,
  StyledContainer,
  StyledContentContainer,
  StyledInfoContainer,
  StyledLightHover,
  StyledNoContent,
  StyledText,
} from 'components/common/card/commonStyles';
import { ZERO } from 'constants/common';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import {
  PeopleCardPropsType,
  StyledHumanPhotoContentContainerPropsType,
  StyledPeopleRatePropsType,
} from 'types/components/commonTypes/CardTypes/CardTypes';

const StyledHuman = styled.div`
  ${StyledContainer}
`;

const StyledHumanInfoContainer = styled.div`
  ${StyledInfoContainer}
`;

const StyledHumanRate = styled.div<StyledPeopleRatePropsType>`
  ${StyledText};
  opacity: 0;
  transform: ${props =>
    props.popularity === ZERO ? 'translate(-50%, 135%)' : 'translate(-50%, 60%)'};
  font-size: ${props => (props.popularity === ZERO ? '22px' : '35px')};
`;

const StyledMovieReleaseDate = styled.div`
  ${StyledText};
  opacity: 0;
  transform: translate(-50%, 760%);
  font-size: 14px;
`;

const StyledHumanContainerContainer = styled.div`
  cursor: pointer;
  transition: 0.22s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
    ${StyledHumanRate}, ${StyledMovieReleaseDate} {
      opacity: 0;
    }
  }
`;

const StyledHumanPhotoContentContainer = styled.div<StyledHumanPhotoContentContainerPropsType>`
  ${StyledContentContainer}
  ${props => props.nullContent && StyledLightHover}
`;

const StyledHumanPhoto = styled.img`
  ${StyledNoContent}
`;

const StyledHumanNoPhotoContainer = styled.div`
  ${StyledNoContent}
`;

const StyledHumanNoPhotoTitle = styled.span`
  ${StyledText};
  transform: translate(-50%, -65%);
  font-size: 22px;
  font-weight: 500;
`;

const StyledHumanName = styled.div`
  ${StyledCardTitle}
`;

export const PeopleCard: FC<PeopleCardPropsType> = ({
  name,
  profilePath,
  popularity,
}): ReturnComponentType => (
  <StyledHuman>
    <StyledHumanContainerContainer>
      <StyledHumanInfoContainer>
        <StyledHumanRate popularity={popularity}>
          {popularity === ZERO ? 'Not rated' : popularity}
        </StyledHumanRate>
      </StyledHumanInfoContainer>
      <StyledHumanPhotoContentContainer nullContent={profilePath === null}>
        {profilePath === null ? (
          <StyledHumanNoPhotoContainer>
            <StyledHumanNoPhotoTitle>No photo</StyledHumanNoPhotoTitle>
          </StyledHumanNoPhotoContainer>
        ) : (
          <StyledHumanPhoto src={`${image300x450}${profilePath}`} alt={`${name} photo`} />
        )}
      </StyledHumanPhotoContentContainer>
    </StyledHumanContainerContainer>
    <StyledHumanName>{name}</StyledHumanName>
  </StyledHuman>
);
