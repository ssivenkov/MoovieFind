import React from 'react';

import { image300x450 } from 'api/config';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { ComponentType } from 'types/common/componentType';

import {
  StyledEmptyPoster,
  StyledInfoContainer,
  StyledMovie,
  StyledMovieContainer,
  StyledMovieTitle,
  StyledPoster,
  StyledPosterDarkContainer,
  StyledRate,
  StyledReleaseDate,
} from './styles';
import { MovieCardPropsType } from './types';

export const MovieCard = (props: MovieCardPropsType): ComponentType => {
  const { movieID, posterPath, title, voteAverage, releaseDate } = props;

  const navigate = useNavigate();

  return (
    <StyledMovie>
      <StyledMovieContainer onClick={() => navigate(`/${PATH.MOVIE}/${movieID}`)}>
        <StyledInfoContainer>
          <StyledRate voteAverage={voteAverage}>
            {voteAverage === 0 ? 'Not rated' : voteAverage}
          </StyledRate>
          <StyledReleaseDate>
            {releaseDate ? moment(releaseDate).format('MMMM DD, YYYY') : 'No date'}
          </StyledReleaseDate>
        </StyledInfoContainer>
        <StyledPosterDarkContainer>
          {posterPath ? (
            <StyledPoster
              alt={`poster for the ${title}`}
              src={`${image300x450}${posterPath}`}
            />
          ) : (
            <StyledEmptyPoster />
          )}
        </StyledPosterDarkContainer>
      </StyledMovieContainer>
      <StyledMovieTitle>{title}</StyledMovieTitle>
    </StyledMovie>
  );
};
