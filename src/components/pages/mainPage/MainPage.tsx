import { MOVIE, TV } from 'constants/common';

import React, { useEffect } from 'react';

import { api_key } from 'api/config';
import { moviesAPI } from 'api/moviesAPI/moviesAPI';
import { tvShowsAPI } from 'api/tvShowsAPI/tvShowsAPI';
import { SearchSection } from 'components/pages/mainPage/sections/searchSection/SearchSection';
import { TrendingSection } from 'components/pages/mainPage/sections/trendingSection/TrendingSection';
import { WhatsPopularSection } from 'components/pages/mainPage/sections/whatsPopularSection/WhatsPopularSection';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { FullRequestType } from 'types/api/requestTypes';
import { ComponentType } from 'types/common/componentType';

import {
  StyledH2,
  StyledH3,
  StyledIntroContainer,
  StyledIntroWrapper,
  StyledMainContainer,
  StyledSearchContainer,
  StyledSectionsContainer,
  StyledWelcomeContainer,
} from './styles';

export const MainPage = observer((): ComponentType => {
  const { appStore, mainStore, movieCardsStore, tvShowCardsStore } = useStore();

  const language = appStore.language;
  const popularTVShows = tvShowCardsStore.tvShowCards;
  const popularMovies = movieCardsStore.movieCards;
  const trendingTVShows = mainStore.trendingTVShows;
  const trendingMovies = mainStore.trendingMovies;
  const whatsPopularFilter = mainStore.whatsPopularFilter;
  const trendingFilter = mainStore.trendingFilter;
  const trendingTimeFilter = mainStore.trendingTimeFilter;
  const searchImageLink = mainStore.searchImageLink;

  const requestObject: FullRequestType = { api_key, language, page: 1 };

  useEffect(() => {
    if (whatsPopularFilter === TV) {
      tvShowCardsStore.getTVShows(tvShowsAPI.getPopular, 1, true);
    }

    if (whatsPopularFilter === MOVIE) {
      movieCardsStore.getMovies(moviesAPI.getPopular, 1, true);
    }
  }, [whatsPopularFilter]);

  useEffect(() => {
    if (trendingFilter === TV) {
      mainStore.getTrendingTVShows({
        tempRequestObject: requestObject,
        timeWindow: trendingTimeFilter,
      });
    }

    if (trendingFilter === MOVIE) {
      mainStore.getTrendingMovies({
        tempRequestObject: requestObject,
        timeWindow: trendingTimeFilter,
      });
    }
  }, [trendingFilter, trendingTimeFilter]);

  useEffect(() => {
    if (popularTVShows.length !== 0 && trendingTVShows.length !== 0) {
      mainStore.setRandomSearchBackgroundImage([popularTVShows, trendingTVShows]);
    }
  }, [popularTVShows.length, trendingTVShows.length]);

  return (
    <StyledMainContainer>
      <StyledIntroWrapper imageLink={searchImageLink}>
        <StyledIntroContainer>
          <StyledWelcomeContainer>
            <StyledH2>Welcome</StyledH2>
            <StyledH3>
              Millions of movies, TV shows and people to discover. Explore now
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
          popularMovies={popularMovies}
          popularTVShows={popularTVShows}
        />
        <TrendingSection
          filter={trendingFilter}
          timeFilter={trendingTimeFilter}
          trendingMovies={trendingMovies}
          trendingTVShows={trendingTVShows}
        />
      </StyledSectionsContainer>
    </StyledMainContainer>
  );
});
