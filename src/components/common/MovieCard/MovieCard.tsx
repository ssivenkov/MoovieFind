import React, { FC } from 'react';

import moment from 'moment';
import styled from 'styled-components';

import { imageSource } from 'api/config';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMovie = styled.div`
  width: 150px;
  margin: 0 12px 25px 12px;
`;

const StyledMovieInfoContainer = styled.div`
  z-index: 40;
  position: relative;
  transition: 0.22s ease-out;
`;

const StyledMovieRate = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 60%);
  font-size: 35px;
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

const StyledMovieContainer = styled.div`
  cursor: pointer;
  transition: 0.22s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
    ${StyledMovieRate}, ${StyledMovieReleaseDate} {
      opacity: 1;
    }
  }
`;

const StyledMoviePosterShadowContainer = styled.div`
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
      background-color: rgba(7, 5, 14, 0.8);
    }
  }
`;

const StyledMoviePoster = styled.img`
  width: 150px;
  height: 230px;
  border-radius: 10px;
  user-select: none;
  object-fit: cover;
  background-color: var(--primary_almost-medium);
`;

const StyledMovieTitle = styled.div`
  margin-top: 10px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  height: 1.2em;
  text-overflow: ellipsis;
`;

type MovieCardPropsType = {
  title: string;
  posterPath: string;
  voteAverage: number;
  releaseDate: string;
};

const MovieCard: FC<MovieCardPropsType> = ({
  posterPath,
  title,
  voteAverage,
  releaseDate,
}): ReturnComponentType => (
  <StyledMovie>
    <StyledMovieContainer>
      <StyledMovieInfoContainer>
        <StyledMovieRate>{voteAverage}</StyledMovieRate>
        <StyledMovieReleaseDate>
          {moment(releaseDate).format('MMMM DD, YYYY')}
        </StyledMovieReleaseDate>
      </StyledMovieInfoContainer>
      <StyledMoviePosterShadowContainer>
        <StyledMoviePoster
          src={`${imageSource}${posterPath}`}
          alt={`poster for the movie ${title}`}
        />
      </StyledMoviePosterShadowContainer>
    </StyledMovieContainer>
    <StyledMovieTitle>{title}</StyledMovieTitle>
  </StyledMovie>
);

export default MovieCard;
