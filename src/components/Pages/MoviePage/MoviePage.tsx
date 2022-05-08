import React, { useEffect } from 'react';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { arrayOfStringsFormattingHelper } from '../../../helpers/arrayOfStringsFormattingHelper';

import {
  StyledMovieContainer,
  StyledTitle,
  StyledPoster,
  StyledPosterContainer,
  StyledUserScoreContainer,
  StyledAdditionalContainer,
  StyledMainContainer,
  StyledTagline,
  StyledOverviewExplanation,
  StyledDescriptionContainer,
  StyledTitleContainer,
  StyledMovieInfoContainer,
} from './style';

import { image300x450 } from 'api/config';
import { Loader } from 'components/common/Loader/Loader';
import { NOT_AVAILABLE, ONE, ZERO } from 'constants/common';
import { timeFormattingHelper } from 'helpers/timeFormattingHelper';
import { getAppInitializedSelector } from 'store/selectors/appSelectors';
import { getMovieSelector } from 'store/selectors/movieSelectors';
import { AppRootStateType } from 'store/store';
import { getExternalMovieLinks, getMovie } from 'store/thunks/movieThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { MovieDataType } from 'types/reducers/movieReducerTypes';

export const MoviePage = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const { movieID } = useParams<string>();
  const appInitialized = useSelector<AppRootStateType, boolean>(
    getAppInitializedSelector,
  );
  const movieData = useSelector<AppRootStateType, MovieDataType>(getMovieSelector);

  let movieTime;
  if (movieData.runtime && movieData.runtime > ZERO) {
    movieTime = timeFormattingHelper(movieData.runtime);
  }

  let releaseDate;
  if (movieData.release_date) {
    releaseDate = moment(movieData.release_date).format('MMMM DD, YYYY');
  }

  let genres;
  if (movieData.genres) {
    genres = arrayOfStringsFormattingHelper(movieData.genres);
  }

  let spokenLanguages;
  if (movieData.spoken_languages) {
    spokenLanguages = arrayOfStringsFormattingHelper(movieData.spoken_languages);
  }

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
            <StyledPoster src={`${image300x450}${movieData.poster_path}`} />
          </StyledPosterContainer>
          <StyledMovieInfoContainer>
            <StyledTitleContainer>
              {movieData.title && <StyledTitle>{movieData.title}</StyledTitle>}
              {movieTime && (
                <div>{`Duration: ${movieTime[ZERO]}h ${movieTime[ONE]}m`}</div>
              )}
              {movieData.release_date && <div>Release date: {releaseDate}</div>}
              {movieData.genres && <div>Genres: {genres}</div>}
            </StyledTitleContainer>
            <StyledUserScoreContainer>
              {'User score: '}
              {movieData.vote_average! > ZERO ? movieData.vote_average : 'No user scores'}
            </StyledUserScoreContainer>
            <StyledDescriptionContainer>
              {movieData.tagline && <StyledTagline>{movieData.tagline}</StyledTagline>}
              {movieData.overview && (
                <div>
                  <StyledOverviewExplanation>Overview</StyledOverviewExplanation>
                  {movieData.overview}
                </div>
              )}
            </StyledDescriptionContainer>
          </StyledMovieInfoContainer>
        </StyledMainContainer>
        <StyledAdditionalContainer>
          {movieData.status && <div>{`Status: ${movieData.status}`}</div>}
          {movieData.original_language && (
            <div>{`Original language: ${movieData.original_language}`}</div>
          )}
          {spokenLanguages && <div>{`Spoken languages: ${spokenLanguages}`}</div>}
          <div>
            {'Budget: '}
            {movieData.budget! > ZERO ? movieData.budget : NOT_AVAILABLE}
          </div>
          <div>
            {'Revenue: '}
            {movieData.revenue! > ZERO ? movieData.revenue : NOT_AVAILABLE}
          </div>
          {movieData.homepage && <div>{`Homepage: ${movieData.homepage}`}</div>}
          {movieData.production_companies && (
            <div>{`Production companies: ${movieData.production_companies.toString()}`}</div>
          )}
        </StyledAdditionalContainer>
      </StyledMovieContainer>
    );
  }

  return <Loader />;
};
