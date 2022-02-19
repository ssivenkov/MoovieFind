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

type WhatsPopularSectionPropsType = {
  popularList: Array<any>;
  filter: number;
};

export const WhatsPopularSection: FC<WhatsPopularSectionPropsType> = ({
  popularList,
  filter,
}): ReturnComponentType => (
  <StyledMainSectionContainer>
    <StyledMainSectionHeader>
      <StyledMainSectionH2>What&apos;s popular</StyledMainSectionH2>
      <StyledMainSectionFiltersWrapper>
        <StyledMainSectionFiltersContainer>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>On TV</StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>{filter}</StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
          <StyledMainSectionFilterWrapper>
            <StyledMainSectionFilter>In Theaters</StyledMainSectionFilter>
          </StyledMainSectionFilterWrapper>
        </StyledMainSectionFiltersContainer>
      </StyledMainSectionFiltersWrapper>
    </StyledMainSectionHeader>
    <StyledMainSectionContentContainer>
      {popularList.map((popularItem: any) => (
        <MovieCard
          key={popularItem.id}
          posterPath={popularItem.poster_path}
          title={popularItem.name}
          voteAverage={popularItem.vote_average}
          releaseDate={popularItem.first_air_date}
        />
      ))}
    </StyledMainSectionContentContainer>
  </StyledMainSectionContainer>
);
