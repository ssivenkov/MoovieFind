import React, { FC } from 'react';

import styled from 'styled-components';

import { image300x450 } from 'api/config';
import { ZERO } from 'constants/common';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import {
  PeopleCardPropsType,
  StyledPeopleRatePropsType,
} from 'types/components/commonTypes/CardTypes/CardTypes';

const StyledHuman = styled.div`
  width: 150px;
  margin: 18px 12px 15px 12px;
`;

const StyledHumanInfoContainer = styled.div`
  z-index: 40;
  position: relative;
  transition: 0.22s ease-out;
`;

const StyledHumanRate = styled.div<StyledPeopleRatePropsType>`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props =>
    props.popularity === ZERO ? 'translate(-50%, 135%)' : 'translate(-50%, 60%)'};
  font-size: ${props => (props.popularity === ZERO ? '22px' : '35px')};
  white-space: nowrap;
  font-weight: 700;
  pointer-events: none;
  transition: 0.22s ease-out;
`;

const StyledMovieReleaseDate = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 760%);
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  pointer-events: none;
  transition: 0.22s ease-out;
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

const StyledHumanPhotoShadowContainer = styled.div`
  transition: 0.22s ease-out;
  z-index: 20;
  &:before {
    content: '';
    width: 150px;
    height: 230px;
    position: absolute;
    border-radius: 9px;
    background-color: transparent;
    transition: 0.22s ease-out;
  }
  &:hover {
    &:before {
      // background-color: rgba(7, 5, 14, 0.8);
    }
  }
`;

const StyledHumanPhoto = styled.img`
  width: 150px;
  height: 230px;
  border-radius: 10px;
  user-select: none;
  object-fit: cover;
  background-color: var(--primary_almost-medium);
`;

const StyledHumanName = styled.div`
  margin-top: 10px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  height: 1.2em;
  text-overflow: ellipsis;
`;

export const PeopleCard: FC<PeopleCardPropsType> = ({
  name,
  // eslint-disable-next-line camelcase
  profile_path,
  popularity,
}): ReturnComponentType => (
  <StyledHuman>
    <StyledHumanContainerContainer>
      <StyledHumanInfoContainer>
        <StyledHumanRate popularity={popularity}>
          {popularity === ZERO ? 'Not rated' : popularity}
        </StyledHumanRate>
      </StyledHumanInfoContainer>
      <StyledHumanPhotoShadowContainer>
        {/* eslint-disable-next-line camelcase */}
        <StyledHumanPhoto src={`${image300x450}${profile_path}`} alt={`${name} photo`} />
      </StyledHumanPhotoShadowContainer>
    </StyledHumanContainerContainer>
    <StyledHumanName>{name}</StyledHumanName>
  </StyledHuman>
);
