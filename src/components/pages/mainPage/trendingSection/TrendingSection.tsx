import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { ExtraCard } from 'components/common/card/ExtraCard';
import { MovieCard } from 'components/common/card/MovieСard';
import { TempEmptyCard } from 'components/common/card/TempEmptyCard';
import { SliderContainer } from 'components/common/slider/Slider';
import {
  StyledMainSectionContainer,
  StyledMainSectionContentContainer,
  StyledMainSectionFiltersContainer,
  StyledMainSectionFiltersWrapper,
  StyledMainSectionLinkTitle,
  StyledMainSectionHeader,
} from 'components/pages/mainPage/common/styledComponents/MainStyledComponents';
import { SwitchButton } from 'components/pages/mainPage/common/switchButton/SwitchButton';
import { DAY, MOVIE, TV, WEEK, ZERO } from 'constants/common';
import { tempList } from 'constants/lists';
import { PATH } from 'routes/routes';
import { setTrendingFilterAction } from 'store/actions/mainReducerActions/setTrendingFilterAction';
import { setTrendingTimeFilterAction } from 'store/actions/mainReducerActions/setTrendingTimeFilterAction';
import { MovieType } from 'store/reducers/moviesReducer/types';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { TrendingSectionPropsType } from 'types/components/MainTypes/TrendingSectionSypes/TrendingSectionType';

export const TrendingSection: FC<TrendingSectionPropsType> = ({
  trendingList,
  filter,
  timeFilter,
}): ReturnComponentType => {
  const dispatch = useDispatch();
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
              <MovieCard
                movieID={trendingTVShow.id}
                key={trendingTVShow.id}
                posterPath={trendingTVShow.poster_path ? trendingTVShow.poster_path : ''}
                title={trendingTVShow.name}
                voteAverage={trendingTVShow.vote_average}
                releaseDate={trendingTVShow.first_air_date}
              />
            ))}
          {filter === MOVIE &&
            trendingList.map((trendingMovie: MovieType) => (
              <MovieCard
                movieID={trendingMovie.id}
                key={trendingMovie.id}
                posterPath={trendingMovie.poster_path ? trendingMovie.poster_path : ''}
                title={trendingMovie.title ? trendingMovie.title : ''}
                voteAverage={
                  trendingMovie.vote_average ? trendingMovie.vote_average : ZERO
                }
                releaseDate={trendingMovie.release_date ? trendingMovie.release_date : ''}
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
