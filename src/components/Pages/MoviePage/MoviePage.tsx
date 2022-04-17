import React, { useEffect } from 'react';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { genresFormatting } from '../../../helpers/genresFormatting';

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
import { ONE, ZERO } from 'constants/common';
import { timeFormatting } from 'helpers/timeFormatting';
import { getAppInitializedSelector } from 'store/selectors/appSelectors';
import { getMovieSelector } from 'store/selectors/movieSelectors';
import { AppRootStateType } from 'store/store';
import { getMovie } from 'store/thunks/movieThunk';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { MovieDataType } from 'types/reducers/movieReducerTypes';

export const MoviePage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const { movieID } = useParams<string>();
  const appInitialized = useSelector<AppRootStateType, boolean>(
    getAppInitializedSelector,
  );
  const movieData = useSelector<AppRootStateType, MovieDataType>(getMovieSelector);

  console.log(movieData);

  let movieTime;
  if (movieData.runtime && movieData.runtime > ZERO) {
    movieTime = timeFormatting(movieData.runtime);
  }

  let releaseDate;
  if (movieData.release_date) {
    releaseDate = moment(movieData.release_date).format('MMMM DD, YYYY');
  }

  let genres;
  if (movieData.genres) {
    genres = genresFormatting(movieData.genres);
  }

  useEffect(() => {
    if (movieID) {
      dispatch(getMovie(movieID));
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
              <StyledTitle>{movieData.title && movieData.title}</StyledTitle>
              {movieData.runtime && movieTime && (
                <div>{`Duration: ${movieTime[ZERO]}h ${movieTime[ONE]}m`}</div>
              )}
              <div>Release date: {movieData.release_date && releaseDate}</div>
              <div>Genres: {movieData.genres && genres}</div>
            </StyledTitleContainer>
            <StyledUserScoreContainer>
              User score: {movieData.vote_average && movieData.vote_average}
            </StyledUserScoreContainer>
            <StyledDescriptionContainer>
              <StyledTagline>{movieData.tagline && movieData.tagline}</StyledTagline>
              <div>
                <StyledOverviewExplanation>Overview</StyledOverviewExplanation>
                {movieData.overview && movieData.overview}
              </div>
            </StyledDescriptionContainer>
          </StyledMovieInfoContainer>
        </StyledMainContainer>
        <StyledAdditionalContainer>
          <div>Status: {movieData.status && movieData.status}</div>
          <div>
            Original language:{' '}
            {movieData.original_language && movieData.original_language}
          </div>
          <div>Budget: {movieData.budget && movieData.budget}</div>
          <div>Revenue: {movieData.revenue && movieData.revenue}</div>
          <div>Homepage: {movieData.homepage && movieData.homepage}</div>
        </StyledAdditionalContainer>
        {/* <div>Movie id: {movieData.id && movieData.id}</div>
        <div>Movie imdb_id: {movieData.imdb_id && movieData.imdb_id}</div>
        <div>Movie adult: {movieData.adult && movieData.adult}</div>
        <div>
          Movie belongs_to_collection:{' '}
          {movieData.belongs_to_collection && movieData.belongs_to_collection.toString()}
        </div>
       
        <div>poster_path: {movieData.poster_path && movieData.poster_path}</div>
        <div>
          Movie production_companies:{' '}
          {movieData.production_companies && movieData.production_companies.toString()}
        </div>
        <div>
          Movie production_countries:{' '}
          {movieData.production_countries && movieData.production_countries.toString()}
        </div>
        <div>Movie video: {movieData.video && movieData.video}</div> */}
      </StyledMovieContainer>
    );
  }

  return <Loader />;
};
