import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// eslint-disable-next-line camelcase
import { api_key, originalImage } from 'api/config';
import { SearchSection } from 'components/Pages/MainPage/SearchSection/SearchSection';
import { TrendingSection } from 'components/Pages/MainPage/TrendingSection/TrendingSection';
import { WhatsPopularSection } from 'components/Pages/MainPage/WhatsPopularSection/WhatsPopularSection';
import { MOVIE, TV, ONE, DAY, WEEK, ZERO } from 'constants/common';
import { clearSearchImageLink } from 'store/actions/mainActions';
import { getAppLanguageSelector } from 'store/selectors/appSelectors';
import {
  getSearchImageLinkSelector,
  getTrendingFilterSelector,
  getTrendingTimeFilterSelector,
  getWhatsPopularFilterSelector,
} from 'store/selectors/mainSelectors';
import { getMoviesListSelector } from 'store/selectors/moviesSelectors';
import {
  getTrendingMoviesListSelector,
  getTrendingTVShowsListSelector,
} from 'store/selectors/trendingSelectors';
import { getTVShowsListSelector } from 'store/selectors/TVShowsSelectors';
import { AppRootStateType } from 'store/store';
import { setRandomSearchBackgroundImage } from 'store/thunks/mainThunk';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { getTrendingMovies, getTrendingTVShows } from 'store/thunks/trendingThunk';
import { getPopularTVShows } from 'store/thunks/TVShowsThunk';
import { RequestObjectType } from 'types/commonTypes/RequestObjectType';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { StyledIntroWrapperPropsType } from 'types/components/MainTypes/MainTypes';
import { MovieType } from 'types/reducers/moviesReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

const StyledMainContainer = styled.div`
  width: 100%;
`;
const StyledIntroWrapper = styled.div<StyledIntroWrapperPropsType>`
  height: calc(100vh / 2.5);
  min-height: 300px;
  max-height: 360px;
  display: flex;
  align-items: center;
  background-color: #555;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    ${props => props.imageLink.length > ZERO && `url(${originalImage}${props.imageLink})`};
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

export const MainPage = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const page = ONE;
  const language = useSelector<AppRootStateType, string>(getAppLanguageSelector);
  const requestObj: RequestObjectType = { api_key, language, page };

  const popularTVShowsList = useSelector<AppRootStateType, TVShowType[]>(
    getTVShowsListSelector,
  );
  const popularMoviesList = useSelector<AppRootStateType, MovieType[]>(
    getMoviesListSelector,
  );
  const trendingTVShowsList = useSelector<AppRootStateType, TVShowType[]>(
    getTrendingTVShowsListSelector,
  );
  const trendingMoviesList = useSelector<AppRootStateType, MovieType[]>(
    getTrendingMoviesListSelector,
  );
  const whatsPopularFilter = useSelector<AppRootStateType, string>(
    getWhatsPopularFilterSelector,
  );
  const trendingFilter = useSelector<AppRootStateType, string>(getTrendingFilterSelector);
  const trendingTimeFilter = useSelector<AppRootStateType, string>(
    getTrendingTimeFilterSelector,
  );
  const searchImageLink = useSelector<AppRootStateType, string>(
    getSearchImageLinkSelector,
  );

  useEffect(() => {
    switch (whatsPopularFilter) {
      case TV: {
        dispatch(getPopularTVShows());
        break;
      }
      case MOVIE: {
        dispatch(getPopularMovies());
        break;
      }
      default:
    }
  }, [whatsPopularFilter]);

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

  useEffect(() => {
    if (
      popularTVShowsList.length !== ZERO &&
      trendingTVShowsList.length !== ZERO &&
      searchImageLink.length === ZERO
    ) {
      dispatch(setRandomSearchBackgroundImage([popularTVShowsList, trendingTVShowsList]));
    }
  }, [popularTVShowsList, trendingTVShowsList, searchImageLink]);

  useEffect(
    () =>
      function clearSearchBackgroundImage() {
        dispatch(clearSearchImageLink());
      },
    [],
  );

  return (
    <StyledMainContainer>
      <StyledIntroWrapper imageLink={searchImageLink}>
        <StyledIntroContainer>
          <StyledWelcomeContainer>
            <StyledH2>Welcome.</StyledH2>
            <StyledH3>
              Millions of movies, TV shows and people to discover. Explore now.
            </StyledH3>
          </StyledWelcomeContainer>
          <StyledSearchContainer>
            <SearchSection />
          </StyledSearchContainer>
        </StyledIntroContainer>
      </StyledIntroWrapper>
      <StyledSectionsContainer>
        <WhatsPopularSection
          popularList={whatsPopularFilter === TV ? popularTVShowsList : popularMoviesList}
          filter={whatsPopularFilter}
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
