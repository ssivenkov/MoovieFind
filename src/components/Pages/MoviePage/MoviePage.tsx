import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/common/Loader/Loader';
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

  useEffect(() => {
    if (movieID) {
      dispatch(getMovie(movieID));
    }
  }, []);

  if (appInitialized) {
    return (
      <div>
        <div>Movie adult: {movieData.adult && movieData.adult}</div>
        <div>
          Movie backdrop_path: {movieData.backdrop_path && movieData.backdrop_path}
        </div>
        <div>
          Movie belongs_to_collection:{' '}
          {movieData.belongs_to_collection && movieData.belongs_to_collection.toString()}
        </div>
        <div>Movie budget: {movieData.budget && movieData.budget}</div>
        <div>Movie genres: {movieData.genres && movieData.genres.toString()}</div>
        <div>Movie homepage: {movieData.homepage && movieData.homepage}</div>
        <div>Movie id: {movieData.id && movieData.id}</div>
        <div>Movie imdb_id: {movieData.imdb_id && movieData.imdb_id}</div>
        <div>
          Movie original_language:{' '}
          {movieData.original_language && movieData.original_language}
        </div>
        <div>
          Movie original_title: {movieData.original_title && movieData.original_title}
        </div>
        <div>Movie overview: {movieData.overview && movieData.overview}</div>
        <div>Movie popularity: {movieData.popularity && movieData.popularity}</div>
        <div>Movie poster_path: {movieData.poster_path && movieData.poster_path}</div>
        <div>
          Movie production_companies:{' '}
          {movieData.production_companies && movieData.production_companies.toString()}
        </div>
        <div>
          Movie production_countries:{' '}
          {movieData.production_countries && movieData.production_countries.toString()}
        </div>
        <div>Movie release_date: {movieData.release_date && movieData.release_date}</div>
        <div>Movie revenue: {movieData.revenue && movieData.revenue}</div>
        <div>Movie runtime: {movieData.runtime && movieData.runtime}</div>
        <div>
          Movie spoken_languages:{' '}
          {movieData.spoken_languages && movieData.spoken_languages.toString()}
        </div>
        <div>Movie status: {movieData.status && movieData.status}</div>
        <div>Movie tagline: {movieData.tagline && movieData.tagline}</div>
        <div>Movie title: {movieData.title && movieData.title}</div>
        <div>Movie video: {movieData.video && movieData.video}</div>
        <div>Movie vote_average: {movieData.vote_average && movieData.vote_average}</div>
        <div>Movie vote_count: {movieData.vote_count && movieData.vote_count}</div>
      </div>
    );
  }

  return <Loader />;
};
