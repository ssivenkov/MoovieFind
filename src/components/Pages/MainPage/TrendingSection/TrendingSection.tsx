import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { ExtraCard } from 'components/common/Card/ExtraCard';
import { Card } from 'components/common/Card/MovieСard';
import { TempEmptyCard } from 'components/common/Card/TempEmptyCard';
import { SliderContainer } from 'components/common/Slider/Slider';
import {
  StyledMainSectionContainer,
  StyledMainSectionContentContainer,
  StyledMainSectionFiltersContainer,
  StyledMainSectionFiltersWrapper,
  StyledMainSectionLinkTitle,
  StyledMainSectionHeader,
} from 'components/Pages/MainPage/common/StyledComponents/MainStyledComponents';
import { SwitchButton } from 'components/Pages/MainPage/common/SwitchButton/SwitchButton';
import { DAY, MOVIE, TV, WEEK, ZERO } from 'constants/common';
import { tempList } from 'constants/lists';
import { PATH } from 'routes/routes';
import { setTrendingFilter, setTrendingTimeFilter } from 'store/actions/mainActions';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { TrendingSectionPropsType } from 'types/components/MainTypes/TrendingSectionSypes/TrendingSectionType';
import { MovieType } from 'types/reducers/movieReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

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
        <StyledMainSectionLinkTitle
          to={`${filter === TV ? PATH.TVSHOWS : PATH.MOVIES}/${PATH.TRENDING}`}
        >
          Trending
        </StyledMainSectionLinkTitle>
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
          <ExtraCard
            link={`${filter === TV ? PATH.TVSHOWS : PATH.MOVIES}/${PATH.TRENDING}`}
            title="See all"
          />
        </SliderContainer>
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
