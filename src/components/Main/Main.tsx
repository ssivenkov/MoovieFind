import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { LatestTrailerSection } from 'components/Main/LatestTrailersSection/LatestTrailerSection';
import { TrendingSection } from 'components/Main/TrendingSection/TrendingSection';
import { WhatsPopularSection } from 'components/Main/WhatsPopularSection/WhatsPopularSection';
import { Search } from 'components/Search/Search';
import { ONE, ZERO } from 'constants/common';
import { LatestTrailerType } from 'store/reducers/latestTrailersReducer';
import { MovieType } from 'store/reducers/moviesReducer';
import { TVShowType } from 'store/reducers/TVShowsReducer';
import { AppRootStateType } from 'store/store';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { getPopularTVShows, getTopRatedTVShows } from 'store/thunks/TVShowsThunk';
import { RequestObjectType } from 'types/RequestObjectType';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMainContainer = styled.div`
  width: 100%;
`;
const StyledIntroWrapper = styled.div`
  height: calc(100vh / 2.5);
  min-height: 300px;
  max-height: 360px;
  display: flex;
  align-items: center;
  background-color: #555;
  // background-image: url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,7D031F,EBE0B8)/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg');
  background-size: cover;
`;
const StyledIntroContainer = styled.div`
  width: 100%;
  padding: 30px 40px;
`;
const StyledWelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledH2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;
`;
const StyledH3 = styled.h3`
  font-size: 32px;
  font-weight: 600;
`;
const StyledSearchContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
`;
const StyledSectionsContainer = styled.div``;

export const Main = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(state => state.app.language);
  const tempRequestObj: RequestObjectType = { api_key, language, page };
  const moviesList = useSelector<AppRootStateType, Array<MovieType>>(
    state => state.movies.movies,
  );
  const TVShowsList = useSelector<AppRootStateType, Array<TVShowType>>(
    state => state.TVShows.TVShows,
  );
  const latestTrailersList = useSelector<AppRootStateType, Array<LatestTrailerType>>(
    state => state.latestTrailers.latestTrailers,
  );
  const WhatsPopularFilter = useSelector<AppRootStateType, number>(
    state => state.main.WhatsPopularFilter,
  );
  const LatestTrailersFilter = useSelector<AppRootStateType, number>(
    state => state.main.LatestTrailersFilter,
  );
  const TrendingFilter = useSelector<AppRootStateType, number>(
    state => state.main.TrendingFilter,
  );
  const TrendingTimeFilter = useSelector<AppRootStateType, number>(
    state => state.main.TrendingTimeFilter,
  );

  useEffect(() => {
    if (moviesList.length === ZERO) dispatch(getPopularMovies(tempRequestObj));
    if (TVShowsList.length === ZERO) dispatch(getPopularTVShows(tempRequestObj));
    if (latestTrailersList.length === ZERO) dispatch(getTopRatedTVShows(tempRequestObj));
  }, []);

  return (
    <StyledMainContainer>
      <StyledIntroWrapper>
        <StyledIntroContainer>
          <StyledWelcomeContainer>
            <StyledH2>Welcome.</StyledH2>
            <StyledH3>
              Millions of movies, TV shows and people to discover. Explore now.
            </StyledH3>
          </StyledWelcomeContainer>
          <StyledSearchContainer>
            <Search />
          </StyledSearchContainer>
        </StyledIntroContainer>
      </StyledIntroWrapper>
      <StyledSectionsContainer>
        <WhatsPopularSection popularList={TVShowsList} filter={WhatsPopularFilter} />
        <LatestTrailerSection
          latestTrailerList={latestTrailersList}
          filter={LatestTrailersFilter}
        />
        <TrendingSection
          trendingList={TVShowsList}
          filter={TrendingFilter}
          timeFilter={TrendingTimeFilter}
        />
      </StyledSectionsContainer>
    </StyledMainContainer>
  );
};
