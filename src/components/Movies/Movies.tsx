import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { Loader } from 'components/common/Loader/Loader';
import { MovieSection } from 'components/common/MovieSection/MovieSection';
import { ONE, ZERO } from 'constants/common';
import { MovieType } from 'store/reducers/moviesReducer';
import { AppRootStateType } from 'store/store';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { RequestObjectType } from 'types/RequestObjectType';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Movies = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: RequestObjectType = { api_key, language, page };
  const sectionTitle = 'Movies';
  const moviesList = useSelector<AppRootStateType, Array<MovieType>>(
    state => state.movies.movies,
  );
  const appContentInitialized = useSelector<AppRootStateType, boolean>(
    state => state.app.contentInitialized,
  );

  useEffect(() => {
    if (moviesList.length === ZERO) dispatch(getPopularMovies(tempRequestObj));
  }, []);

  if (appContentInitialized && moviesList.length === ZERO) {
    return <div>{sectionTitle} not found</div>;
  }

  if (moviesList.length !== ZERO) {
    return <MovieSection moviesList={moviesList} sectionTitle={sectionTitle} />;
  }

  return <Loader />;
};
