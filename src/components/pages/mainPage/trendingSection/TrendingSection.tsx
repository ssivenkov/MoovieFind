import { DAY, MOVIE, TV, WEEK } from 'constants/common';
import { tempList } from 'constants/lists';

import React from 'react';

import { ExtraCard } from 'components/common/card/ExtraCard';
import { MovieCard } from 'components/common/card/MovieСard';
import { TempEmptyCard } from 'components/common/card/TempEmptyCard';
import { SliderContainer } from 'components/common/slider/Slider';
import { Switcher } from 'components/common/switcher/Switcher';
import {
  StyledMainSectionContainer,
  StyledMainSectionContentContainer,
  StyledMainSectionFiltersContainer,
  StyledMainSectionFiltersWrapper,
  StyledMainSectionHeader,
  StyledMainSectionLinkTitle,
} from 'components/pages/mainPage/commonStyles/MainStyledComponents';
import { useDispatch } from 'react-redux';
import { PATH } from 'routes/routes';
import { setTrendingFilterAction } from 'store/actions/mainReducerActions/setTrendingFilterAction';
import { setTrendingTimeFilterAction } from 'store/actions/mainReducerActions/setTrendingTimeFilterAction';
import { ComponentType } from 'types/common/componentType';

import { TrendingSectionPropsType } from './types';

export const TrendingSection = (props: TrendingSectionPropsType): ComponentType => {
  const { trendingTVShowsList, trendingMoviesList, filter, timeFilter } = props;

  const dispatch = useDispatch();

  const emptyCardsCondition =
    trendingTVShowsList.length === 0 && trendingMoviesList.length === 0;
  const extraCardCondition =
    trendingTVShowsList.length !== 0 || trendingMoviesList.length !== 0;

  const onTVFilterClick = (): void => {
    dispatch(setTrendingFilterAction({ trendingFilter: TV }));
  };
  const onMoviesFilterClick = (): void => {
    dispatch(setTrendingFilterAction({ trendingFilter: MOVIE }));
  };
  const onDayClick = (): void => {
    dispatch(setTrendingTimeFilterAction({ trendingTimeFilter: DAY }));
  };
  const onWeekClick = (): void => {
    dispatch(setTrendingTimeFilterAction({ trendingTimeFilter: WEEK }));
  };

  return (
    <StyledMainSectionContainer>
      <StyledMainSectionHeader>
        <StyledMainSectionLinkTitle
          to={`${filter === TV ? PATH.TV_SHOWS : PATH.MOVIES}/${PATH.TRENDING}`}
        >
          Trending
        </StyledMainSectionLinkTitle>
        <StyledMainSectionFiltersWrapper>
          <StyledMainSectionFiltersContainer>
            <Switcher
              disabled={filter === TV}
              isActive={filter === TV}
              onClick={onTVFilterClick}
            >
              On TV
            </Switcher>
            <Switcher
              disabled={filter === MOVIE}
              isActive={filter === MOVIE}
              onClick={onMoviesFilterClick}
            >
              In Theaters
            </Switcher>
          </StyledMainSectionFiltersContainer>
          <StyledMainSectionFiltersContainer>
            <Switcher
              disabled={timeFilter === DAY}
              isActive={timeFilter === DAY}
              onClick={onDayClick}
            >
              Today
            </Switcher>
            <Switcher
              disabled={timeFilter === WEEK}
              isActive={timeFilter === WEEK}
              onClick={onWeekClick}
            >
              This week
            </Switcher>
          </StyledMainSectionFiltersContainer>
        </StyledMainSectionFiltersWrapper>
      </StyledMainSectionHeader>
      <StyledMainSectionContentContainer>
        <SliderContainer>
          {emptyCardsCondition &&
            tempList.map((tempEmptyCard) => <TempEmptyCard key={tempEmptyCard} />)}
          {filter === TV &&
            trendingTVShowsList.map((item) => (
              <MovieCard
                key={item.id}
                movieID={item.id}
                posterPath={item.poster_path ? item.poster_path : ''}
                releaseDate={item.first_air_date}
                title={item.name}
                voteAverage={item.vote_average}
              />
            ))}
          {filter === MOVIE &&
            trendingMoviesList.map((item) => (
              <MovieCard
                key={item.id}
                movieID={item.id}
                posterPath={item.poster_path ? item.poster_path : ''}
                releaseDate={item.release_date ? item.release_date : ''}
                title={item.title ? item.title : ''}
                voteAverage={item.vote_average ? item.vote_average : 0}
              />
            ))}
          {extraCardCondition && (
            <ExtraCard
              link={`${filter === TV ? PATH.TV_SHOWS : PATH.MOVIES}/${PATH.TRENDING}`}
              title='See all'
            />
          )}
        </SliderContainer>
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
