import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// eslint-disable-next-line camelcase
import { api_key } from 'api/config';
import { LatestTrailersSections } from 'components/Main/LatestTrailersSection/LatestTrailerSection';
import { TrendingSection } from 'components/Main/TrendingSection/TrendingSection';
import { WhatsPopularSection } from 'components/Main/WhatsPopularSection/WhatsPopularSection';
import { Search } from 'components/Search/Search';
import { MOVIE, TV, ONE, DAY, WEEK } from 'constants/common';
import { AppRootStateType } from 'store/store';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { getTrendingMovies, getTrendingTVShows } from 'store/thunks/trendingThunk';
import { getPopularTVShows } from 'store/thunks/TVShowsThunk';
import { RequestObjectType } from 'types/common/RequestObjectType';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { LatestTrailerType } from 'types/reducers/latestTrailersReducerType';
import { MovieType } from 'types/reducers/movieReducerType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

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
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
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
  const requestObj: RequestObjectType = { api_key, language, page };
  const popularTVShowsList = useSelector<AppRootStateType, Array<TVShowType>>(
    state => state.TVShows.TVShows,
  );
  const popularMoviesList = useSelector<AppRootStateType, Array<MovieType>>(
    state => state.movies.movies,
  );
  const latestTrailersList = useSelector<AppRootStateType, Array<LatestTrailerType>>(
    state => state.latestTrailers.latestTrailers,
  );
  const trendingTVShowsList = useSelector<AppRootStateType, Array<TVShowType>>(
    state => state.trending.trendingTVShows,
  );
  const trendingMoviesList = useSelector<AppRootStateType, Array<MovieType>>(
    state => state.trending.trendingMovies,
  );
  const whatsPopularFilter = useSelector<AppRootStateType, string>(
    state => state.main.WhatsPopularFilter,
  );
  const latestTrailersFilter = useSelector<AppRootStateType, string>(
    state => state.main.LatestTrailersFilter,
  );
  const trendingFilter = useSelector<AppRootStateType, string>(
    state => state.main.TrendingFilter,
  );
  const trendingTimeFilter = useSelector<AppRootStateType, string>(
    state => state.main.TrendingTimeFilter,
  );

  useEffect(() => {
    switch (whatsPopularFilter) {
      case TV: {
        dispatch(getPopularTVShows(requestObj));
        break;
      }
      case MOVIE: {
        dispatch(getPopularMovies(requestObj));
        break;
      }
      default:
    }
  }, [whatsPopularFilter]);

  /* useEffect(() => {
    switch (latestTrailersFilter) {
      case TV: {
        dispatch(getPopularTVShows(requestObj));
        break;
      }
      case MOVIE: {
        dispatch(getPopularMovies(requestObj));
        break;
      }
      default:
    }
  }, [latestTrailersFilter]); */

  useEffect(() => {
    switch (trendingFilter) {
      case TV: {
        dispatch(getTrendingTVShows(requestObj, trendingTimeFilter));
        break;
      }
      case MOVIE: {
        dispatch(getTrendingMovies(requestObj, trendingTimeFilter));
        break;
      }
      default:
    }
  }, [trendingFilter]);

  useEffect(() => {
    switch (trendingTimeFilter) {
      case DAY: {
        dispatch(
          trendingFilter === TV
            ? getTrendingTVShows(requestObj, trendingTimeFilter)
            : getTrendingMovies(requestObj, trendingTimeFilter),
        );
        break;
      }
      case WEEK: {
        dispatch(
          trendingFilter === TV
            ? getTrendingTVShows(requestObj, trendingTimeFilter)
            : getTrendingMovies(requestObj, trendingTimeFilter),
        );
        break;
      }
      default:
    }
  }, [trendingTimeFilter]);

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
        <WhatsPopularSection
          popularList={whatsPopularFilter === TV ? popularTVShowsList : popularMoviesList}
          filter={whatsPopularFilter}
        />
        <LatestTrailersSections
          latestTrailerList={latestTrailersList}
          filter={latestTrailersFilter}
        />
        <TrendingSection
          trendingList={trendingFilter === TV ? trendingTVShowsList : trendingMoviesList}
          filter={trendingFilter}
          timeFilter={trendingTimeFilter}
        />
      </StyledSectionsContainer>
    </StyledMainContainer>
  );
};
