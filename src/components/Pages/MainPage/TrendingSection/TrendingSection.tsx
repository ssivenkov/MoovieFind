import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { TempEmptyCard } from 'components/common/Card/TempEmptyCard';
import { Card } from 'components/common/Card/Сard';
import { SliderContainer } from 'components/common/Slider/Slider';
import {
  StyledMainSectionContainer,
  StyledMainSectionContentContainer,
  StyledMainSectionFiltersContainer,
  StyledMainSectionFiltersWrapper,
  StyledMainSectionH2,
  StyledMainSectionHeader,
} from 'components/Pages/MainPage/common/StyledComponents/MainStyledComponents';
import { SwitchButton } from 'components/Pages/MainPage/common/SwitchButton/SwitchButton';
import { DAY, MOVIE, TV, WEEK, ZERO } from 'constants/common';
import { tempList } from 'constants/lists';
import { setTrendingFilter, setTrendingTimeFilter } from 'store/actions/mainActions';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { TrendingSectionPropsType } from 'types/components/Main/TrendingSection/TrendingSectionType';
import { MovieType } from 'types/reducers/movieReducerType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

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
        <SliderContainer>
          {trendingList.length === ZERO &&
            tempList.map(tempEmptyCard => <TempEmptyCard key={tempEmptyCard} />)}
          {filter === TV &&
            trendingList.map((trendingTVShow: TVShowType) => (
              <Card
                key={trendingTVShow.id}
                posterPath={trendingTVShow.poster_path}
                title={trendingTVShow.name}
                voteAverage={trendingTVShow.vote_average}
                releaseDate={trendingTVShow.first_air_date}
              />
            ))}
          {filter === MOVIE &&
            trendingList.map((trendingMovie: MovieType) => (
              <Card
                key={trendingMovie.id}
                posterPath={trendingMovie.poster_path}
                title={trendingMovie.title}
                voteAverage={trendingMovie.vote_average}
                releaseDate={trendingMovie.release_date}
              />
            ))}
        </SliderContainer>
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
