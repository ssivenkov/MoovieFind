import React, { FC } from 'react';

import MovieCard from 'components/common/MovieCard/MovieCard';
import {
  StyledMainSectionContainer,
  StyledMainSectionContentContainer,
  StyledMainSectionFilter,
  StyledMainSectionFilterWrapper,
  StyledMainSectionFiltersContainer,
  StyledMainSectionFiltersWrapper,
  StyledMainSectionH2,
  StyledMainSectionHeader,
} from 'components/Main/commonStyles/mainStyles';
import { ReturnComponentType } from 'types/ReturnComponentType';

type TrendingSectionPropsType = {
  trendingList: Array<any>;
  filter: number;
  timeFilter: number;
};

export const TrendingSection: FC<TrendingSectionPropsType> = ({
  trendingList,
  filter,
  timeFilter,
}): ReturnComponentType => (
  <StyledMainSectionContainer>
    <StyledMainSectionHeader>
      <StyledMainSectionH2>Trending</StyledMainSectionH2>
      <StyledMainSectionFiltersWrapper>
        <StyledMainSectionFiltersContainer>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>On TV</StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>
              {filter}
              {timeFilter}
            </StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>In Theaters</StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
        </StyledMainSectionFiltersContainer>
        <StyledMainSectionFiltersContainer>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>Today</StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>This weak</StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
        </StyledMainSectionFiltersContainer>
      </StyledMainSectionFiltersWrapper>
    </StyledMainSectionHeader>
    <StyledMainSectionContentContainer>
      {trendingList.map((trendingItem: any) => (
        <MovieCard
          key={trendingItem.id}
          posterPath={trendingItem.poster_path}
          title={trendingItem.name}
          voteAverage={trendingItem.vote_average}
          releaseDate={trendingItem.first_air_date}
        />
      ))}
    </StyledMainSectionContentContainer>
  </StyledMainSectionContainer>
);
