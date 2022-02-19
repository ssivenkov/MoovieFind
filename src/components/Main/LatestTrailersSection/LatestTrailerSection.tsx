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

type LatestTrailerSectionPropsType = {
  latestTrailerList: Array<any>;
  filter: number;
};

export const LatestTrailerSection: FC<LatestTrailerSectionPropsType> = ({
  latestTrailerList,
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
      {latestTrailerList.map((latestTrailer: any) => (
        <MovieCard
          key={latestTrailer.id}
          posterPath={latestTrailer.poster_path}
          title={latestTrailer.title}
          voteAverage={latestTrailer.vote_average}
          releaseDate={latestTrailer.release_date}
        />
      ))}
    </StyledMainSectionContentContainer>
  </StyledMainSectionContainer>
);
