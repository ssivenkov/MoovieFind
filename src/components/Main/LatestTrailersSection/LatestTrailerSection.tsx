import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import Card from 'components/common/Card/Сard';
import {
  StyledMainSectionContainer,
  StyledMainSectionContentContainer,
  StyledMainSectionFiltersContainer,
  StyledMainSectionFiltersWrapper,
  StyledMainSectionH2,
  StyledMainSectionHeader,
} from 'components/Main/common/StyledComponents/MainStyledComponents';
import { SwitchButton } from 'components/Main/common/SwitchButton/SwitchButton';
import { MOVIE, TV } from 'constants/common';
import { setLatestTrailersFilter } from 'store/actions/mainActions';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { LatestTrailerSectionPropsType } from 'types/components/Main/LatestTrailersSection/LatestTrailersSectionType';

export const LatestTrailersSections: FC<LatestTrailerSectionPropsType> = ({
  latestTrailerList,
  filter,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const onTVFilterClick = (): void => {
    dispatch(setLatestTrailersFilter(TV));
  };
  const onMoviesFilterClick = (): void => {
    dispatch(setLatestTrailersFilter(MOVIE));
  };
  return (
    <StyledMainSectionContainer>
      <StyledMainSectionHeader>
        <StyledMainSectionH2>Latest trailers</StyledMainSectionH2>
        <StyledMainSectionFiltersWrapper>
          <StyledMainSectionFiltersContainer>
            <SwitchButton
              active={filter === TV}
              onClick={onTVFilterClick}
              disabled={filter === TV}
            >
              On TV
            </SwitchButton>
            <SwitchButton
              active={filter === MOVIE}
              onClick={onMoviesFilterClick}
              disabled={filter === MOVIE}
            >
              In Theaters
            </SwitchButton>
          </StyledMainSectionFiltersContainer>
        </StyledMainSectionFiltersWrapper>
      </StyledMainSectionHeader>
      <StyledMainSectionContentContainer>
        {latestTrailerList.map((latestTrailer: any) => (
          <Card
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
};
