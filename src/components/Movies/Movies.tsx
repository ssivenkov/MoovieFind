import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { MovieSection } from 'components/common/MovieSection/MovieSection';
import { requestObjectType } from 'components/RoutesContainer/RoutesContainer';
import { ONE } from 'constants/common';
import { MovieType } from 'store/reducers/moviesReducer';
import { AppRootStateType } from 'store/store';
import { getMovies } from 'store/thunks/moviesThunk';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Movies = (): ReturnComponentType => {
  const dispatch = useDispatch();
  // eslint-disable-next-line camelcase
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: requestObjectType = { api_key, language, page };

  useEffect(() => {
    dispatch(getMovies(tempRequestObj));
  }, []);
  const sectionTitle = 'Movies';
  const moviesList = useSelector<AppRootStateType, Array<MovieType>>(
    state => state.movies.movies,
  );
  return <MovieSection moviesList={moviesList} sectionTitle={sectionTitle} />;
};
