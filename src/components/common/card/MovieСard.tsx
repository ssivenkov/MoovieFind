import React from 'react';

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
} from 'components/common/card/commonStyles';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'routes/routes';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

import { MovieCardPropsType, StyledMovieRatePropsType } from './types';

const StyledMovie = styled.div`
  ${StyledContainer}
`;

const StyledMovieInfoContainer = styled.div`
  ${StyledInfoContainer}
`;

const StyledMovieRate = styled.div<StyledMovieRatePropsType>`
  ${StyledText};
  visibility: hidden;
  transform: ${(props) =>
    props.voteAverage === 0 ? 'translate(-50%, 135%)' : 'translate(-50%, 60%)'};
  font-size: ${(props) => (props.voteAverage === 0 ? '22px' : '35px')};
`;

const StyledMovieReleaseDate = styled.div`
  ${StyledText};
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
  ${StyledSize};
  background-color: var(--primary_almost-medium);
`;

const StyledMovieNoPoster = styled.div`
  ${StyledNoContent}
`;

const StyledMovieTitle = styled.div`
  ${StyledCardTitle}
`;

export const MovieCard = (props: MovieCardPropsType): ComponentType => {
  const { movieID, posterPath, title, voteAverage, releaseDate } = props;
  const navigate = useNavigate();

  return (
    <StyledMovie>
      <StyledMovieContainer onClick={() => navigate(`/${PATH.MOVIE}/${movieID}`)}>
        <StyledMovieInfoContainer>
          <StyledMovieRate voteAverage={voteAverage}>
            {voteAverage === 0 ? 'Not rated' : voteAverage}
          </StyledMovieRate>
          <StyledMovieReleaseDate>
            {releaseDate ? moment(releaseDate).format('MMMM DD, YYYY') : 'No date'}
          </StyledMovieReleaseDate>
        </StyledMovieInfoContainer>
        <StyledMoviePosterShadowContainer>
          {posterPath ? (
            <StyledMoviePoster
              alt={`poster for the ${title}`}
              src={`${image300x450}${posterPath}`}
            />
          ) : (
            <StyledMovieNoPoster />
          )}
        </StyledMoviePosterShadowContainer>
      </StyledMovieContainer>
      <StyledMovieTitle>{title}</StyledMovieTitle>
    </StyledMovie>
  );
};
