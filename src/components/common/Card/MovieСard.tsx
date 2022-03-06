import React, { FC } from 'react';

import moment from 'moment';
import styled from 'styled-components';

import { image300x450 } from 'api/config';
import {
  StyledCardTitle,
  StyledContainer,
  StyledContentContainer,
  StyledDarkHover,
  StyledInfoContainer,
  StyledNoContent,
  StyledSize,
  StyledText,
} from 'components/common/Card/commonStyles';
import { ZERO } from 'constants/common';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import {
  MovieCardPropsType,
  StyledMovieRatePropsType,
} from 'types/components/commonTypes/CardTypes/CardTypes';

const StyledMovie = styled.div`
  ${StyledContainer}
`;

const StyledMovieInfoContainer = styled.div`
  ${StyledInfoContainer}
`;

const StyledMovieRate = styled.div<StyledMovieRatePropsType>`
  ${StyledText}
  visibility: hidden;
  transform: ${props =>
    props.voteAverage === ZERO ? 'translate(-50%, 135%)' : 'translate(-50%, 60%)'};
  font-size: ${props => (props.voteAverage === ZERO ? '22px' : '35px')};
`;

const StyledMovieReleaseDate = styled.div`
  ${StyledText}
  visibility: hidden;
  transform: translate(-50%, 760%);
  font-size: 14px;
`;

const StyledMovieContainer = styled.div`
  cursor: pointer;
  transition: 0.22s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
    ${StyledMovieRate}, ${StyledMovieReleaseDate} {
      visibility: visible;
    }
  }
`;

const StyledMoviePosterShadowContainer = styled.div`
  ${StyledContentContainer}
  ${StyledDarkHover}
`;

const StyledMoviePoster = styled.img`
  ${StyledSize}
  background-color: var(--primary_almost-medium);
`;

const StyledMovieNoPoster = styled.div`
  ${StyledNoContent}
`;

const StyledMovieTitle = styled.div`
  ${StyledCardTitle}
`;

export const MovieCard: FC<MovieCardPropsType> = ({
  posterPath,
  title,
  voteAverage,
  releaseDate,
}): ReturnComponentType => (
  <StyledMovie>
    <StyledMovieContainer>
      <StyledMovieInfoContainer>
        <StyledMovieRate voteAverage={voteAverage}>
          {voteAverage === ZERO ? 'Not rated' : voteAverage}
        </StyledMovieRate>
        <StyledMovieReleaseDate>
          {releaseDate ? moment(releaseDate).format('MMMM DD, YYYY') : 'No date'}
        </StyledMovieReleaseDate>
      </StyledMovieInfoContainer>
      <StyledMoviePosterShadowContainer>
        {posterPath ? (
          <StyledMoviePoster
            src={`${image300x450}${posterPath}`}
            alt={`poster for the ${title}`}
          />
        ) : (
          <StyledMovieNoPoster />
        )}
      </StyledMoviePosterShadowContainer>
    </StyledMovieContainer>
    <StyledMovieTitle>{title}</StyledMovieTitle>
  </StyledMovie>
);
