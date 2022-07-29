import { DAY, MOVIE, TV, WEEK } from 'constants/common';

import React, { useEffect } from 'react';

import { api_key, originalImage } from 'api/config';
import { SearchSection } from 'components/pages/mainPage/searchSection/SearchSection';
import { TrendingSection } from 'components/pages/mainPage/trendingSection/TrendingSection';
import { WhatsPopularSection } from 'components/pages/mainPage/whatsPopularSection/WhatsPopularSection';
import { useDispatch, useSelector } from 'react-redux';
import { appLanguageSelector } from 'store/selectors/appSelectors';
import {
  searchImageLinkSelector,
  trendingFilterSelector,
  trendingTimeFilterSelector,
  whatsPopularFilterSelector,
} from 'store/selectors/mainSelectors';
import { moviesListSelector } from 'store/selectors/moviesSelectors';
import {
  trendingMoviesListSelector,
  trendingTVShowsListSelector,
} from 'store/selectors/trendingSelectors';
import { tvShowsListSelector } from 'store/selectors/tvShowsSelectors';
import { setRandomSearchBackgroundImage } from 'store/thunks/mainThunk';
import { getPopularMovies } from 'store/thunks/moviesThunk';
import { getTrendingMovies, getTrendingTVShows } from 'store/thunks/trendingThunk';
import { getPopularTVShows } from 'store/thunks/tvShowsThunk';
import styled from 'styled-components';
import { FullRequestType } from 'types/api/requestTypes';
import { ComponentType } from 'types/common/componentType';

import { StyledIntroWrapperPropsType } from './types';

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
    ${(props) => props.imageLink.length > 0 && `url(${originalImage}${props.imageLink})`};
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

export const MainPage = (): ComponentType => {
  const dispatch = useDispatch();

  const language = useSelector(appLanguageSelector);
  const popularTVShowsList = useSelector(tvShowsListSelector);
  const popularMoviesList = useSelector(moviesListSelector);
  const trendingTVShowsList = useSelector(trendingTVShowsListSelector);
  const trendingMoviesList = useSelector(trendingMoviesListSelector);
  const whatsPopularFilter = useSelector(whatsPopularFilterSelector);
  const trendingFilter = useSelector(trendingFilterSelector);
  const trendingTimeFilter = useSelector(trendingTimeFilterSelector);
  const searchImageLink = useSelector(searchImageLinkSelector);

  const requestObj: FullRequestType = { api_key, language, page: 1 };

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
    if (popularTVShowsList.length !== 0 && trendingTVShowsList.length !== 0) {
      dispatch(setRandomSearchBackgroundImage([popularTVShowsList, trendingTVShowsList]));
    }
  }, [popularTVShowsList, trendingTVShowsList]);

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
          filter={whatsPopularFilter}
          popularMoviesList={popularMoviesList}
          popularTVShowsList={popularTVShowsList}
        />
        <TrendingSection
          filter={trendingFilter}
          timeFilter={trendingTimeFilter}
          trendingMoviesList={trendingMoviesList}
          trendingTVShowsList={trendingTVShowsList}
        />
      </StyledSectionsContainer>
    </StyledMainContainer>
  );
};
