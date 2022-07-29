import { MOVIE, TV } from 'constants/common';
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
import { setWhatsPopularFilterAction } from 'store/actions/mainReducerActions/setWhatsPopularFilterAction';
import { MovieType } from 'store/reducers/moviesReducer/types';
import { ComponentType } from 'types/common/componentType';

import { WhatsPopularSectionPropsType } from './types';

export const WhatsPopularSection = (
  props: WhatsPopularSectionPropsType,
): ComponentType => {
  const { popularTVShowsList, popularMoviesList, filter } = props;

  const dispatch = useDispatch();

  const emptyCardsCondition =
    popularTVShowsList.length === 0 && popularMoviesList.length === 0;
  const extraCardCondition =
    popularTVShowsList.length !== 0 || popularMoviesList.length !== 0;

  const onTVFilterClick = (): void => {
    dispatch(setWhatsPopularFilterAction({ whatsPopularFilter: TV }));
  };
  const onMoviesFilterClick = (): void => {
    dispatch(setWhatsPopularFilterAction({ whatsPopularFilter: MOVIE }));
  };

  return (
    <StyledMainSectionContainer>
      <StyledMainSectionHeader>
        <StyledMainSectionLinkTitle
          to={`${filter === TV ? PATH.TV_SHOWS : PATH.MOVIES}/${PATH.POPULAR}`}
        >
          What&apos;s popular
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
        </StyledMainSectionFiltersWrapper>
      </StyledMainSectionHeader>
      <StyledMainSectionContentContainer>
        <SliderContainer>
          {emptyCardsCondition &&
            tempList.map((tempEmptyCard) => <TempEmptyCard key={tempEmptyCard} />)}
          {filter === TV &&
            popularTVShowsList.map((item) => (
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
            popularMoviesList.map((item: MovieType) => (
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
              link={`${filter === TV ? PATH.TV_SHOWS : PATH.MOVIES}/${PATH.POPULAR}`}
              title='See all'
            />
          )}
        </SliderContainer>
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
