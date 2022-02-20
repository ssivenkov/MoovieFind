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
import { DAY, MOVIE, TV, WEEK } from 'constants/common';
import { setTrendingFilter, setTrendingTimeFilter } from 'store/actions/mainActions';
import { ReturnComponentType } from 'types/ReturnComponentType';

type TrendingSectionPropsType = {
  trendingList: Array<any>;
  filter: string;
  timeFilter: string;
};

export const TrendingSection: FC<TrendingSectionPropsType> = ({
  trendingList,
  filter,
  timeFilter,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const onTVFilterClick = (): void => {
    dispatch(setTrendingFilter(TV));
  };
  const onMoviesFilterClick = (): void => {
    dispatch(setTrendingFilter(MOVIE));
  };
  const onDayClick = (): void => {
    dispatch(setTrendingTimeFilter(DAY));
  };
  const onWeekClick = (): void => {
    dispatch(setTrendingTimeFilter(WEEK));
  };

  return (
    <StyledMainSectionContainer>
      <StyledMainSectionHeader>
        <StyledMainSectionH2>Trending</StyledMainSectionH2>
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
          <StyledMainSectionFiltersContainer>
            <SwitchButton
              active={timeFilter === DAY}
              onClick={onDayClick}
              disabled={timeFilter === DAY}
            >
              Today
            </SwitchButton>
            <SwitchButton
              active={timeFilter === WEEK}
              onClick={onWeekClick}
              disabled={timeFilter === WEEK}
            >
              This week
            </SwitchButton>
          </StyledMainSectionFiltersContainer>
        </StyledMainSectionFiltersWrapper>
      </StyledMainSectionHeader>
      <StyledMainSectionContentContainer>
        {trendingList.map((trendingItem: any) => (
          <Card
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
};
