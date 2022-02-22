import React, { FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import Card from 'components/common/Card/Сard';
import { Loader } from 'components/common/Loader/Loader';
import { SliderContainer } from 'components/common/Slider/Slider';
import {
  LoaderContainer,
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
  const [initialization, setInitialization] = useState<boolean>(false);
  const onTVFilterClick = (): void => {
    setInitialization(true);
    dispatch(setTrendingFilter(TV));
  };
  const onMoviesFilterClick = (): void => {
    setInitialization(true);
    dispatch(setTrendingFilter(MOVIE));
  };
  const onDayClick = (): void => {
    setInitialization(true);
    dispatch(setTrendingTimeFilter(DAY));
  };
  const onWeekClick = (): void => {
    setInitialization(true);
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
        {initialization ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <SliderContainer>
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
        )}
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
