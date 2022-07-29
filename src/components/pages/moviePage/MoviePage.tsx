import React, { useEffect } from 'react';

import { Loader } from 'components/common/loader/Loader';
import {
  StyledAdditionalContainer,
  StyledDescriptionContainer,
  StyledInfoContainer,
  StyledMainContainer,
  StyledMovieContainer,
  StyledMovieInfoContainer,
  StyledOverviewTitle,
  StyledPosterContainer,
  StyledTagline,
  StyledTitle,
} from 'components/pages/moviePage/style';
import { formatByNameHelper } from 'helpers/formatByNameHelper';
import { timeFormatHelper } from 'helpers/timeFormatHelper';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { appInitializedSelector } from 'store/selectors/appSelectors';
import { movieSelector } from 'store/selectors/movieSelectors';
import { getExternalMovieLinks, getMovie } from 'store/thunks/movieThunk';
import { ComponentType } from 'types/common/componentType';

import { Poster } from './poster/Poster';

export const MoviePage = (): ComponentType => {
  const dispatch = useDispatch();

  const { movieID } = useParams<string>();
  const appInitialized = useSelector(appInitializedSelector);
  const movieData = useSelector(movieSelector);

  const posterPath = movieData.poster_path ? movieData.poster_path : '';

  const title = movieData.title ? movieData.title : 'No title';

  const movieTime =
    movieData.runtime && movieData.runtime > 0 ? timeFormatHelper(movieData.runtime) : '';

  const releaseDate = movieData.release_date
    ? moment(movieData.release_date).format('MMMM DD, YYYY')
    : '';

  const genres =
    movieData.genres && movieData.genres.length > 0
      ? formatByNameHelper(movieData.genres)
      : '';

  const userScore =
    movieData.vote_average && movieData.vote_average > 0
      ? movieData.vote_average
      : 'No user scores';

  const tagline = movieData.tagline ? movieData.tagline : '';

  const overview = movieData.overview ? movieData.overview : '';

  const status = movieData.status ? movieData.status : '';

  const originalLanguage = movieData.original_language ? movieData.original_language : '';

  const spokenLanguages =
    movieData.spoken_languages && movieData.spoken_languages.length > 0
      ? formatByNameHelper(movieData.spoken_languages)
      : '';

  const budget = movieData.budget && movieData.budget > 0 ? movieData.budget : '';

  const revenue = movieData.revenue && movieData.revenue > 0 ? movieData.revenue : '';

  const productionCompanies = movieData.production_companies
    ? formatByNameHelper(movieData.production_companies)
    : '';

  const homepage = movieData.homepage ? movieData.homepage : '';

  useEffect(() => {
    if (movieID) {
      dispatch(getMovie(movieID));
      dispatch(getExternalMovieLinks(movieID));
    }
  }, []);

  if (appInitialized) {
    return (
      <StyledMovieContainer>
        <StyledMainContainer>
          <StyledPosterContainer>
            {posterPath ? <Poster posterLink={posterPath} /> : <Loader />}
          </StyledPosterContainer>
          <StyledMovieInfoContainer>
            <StyledInfoContainer>
              <StyledTitle>{title}</StyledTitle>
              {movieTime && <div>{`Duration: ${movieTime[0]}h ${movieTime[1]}m`}</div>}
              {releaseDate && <div>{`Release date: ${releaseDate}`}</div>}
              {genres && <div>{`Genres: ${genres}`}</div>}
              <div>{`User score: ${userScore}`}</div>
            </StyledInfoContainer>
            <StyledDescriptionContainer>
              {tagline && <StyledTagline>{tagline}</StyledTagline>}
              {overview && (
                <div>
                  <StyledOverviewTitle>Overview</StyledOverviewTitle>
                  {overview}
                </div>
              )}
            </StyledDescriptionContainer>
          </StyledMovieInfoContainer>
        </StyledMainContainer>
        <StyledAdditionalContainer>
          {status && <div>{`Status: ${status}`}</div>}
          {originalLanguage && <div>{`Original language: ${originalLanguage}`}</div>}
          {spokenLanguages && <div>{`Spoken languages: ${spokenLanguages}`}</div>}
          {budget && <div>{`Budget: $${budget}`}</div>}
          {revenue && <div>{`Revenue: $${revenue}`}</div>}
          {productionCompanies && (
            <div>{`Production companies: ${productionCompanies}`}</div>
          )}
          {homepage && (
            <a href={homepage} rel='noreferrer' target='_blank'>
              Homepage
            </a>
          )}
        </StyledAdditionalContainer>
      </StyledMovieContainer>
    );
  }

  return <Loader />;
};
