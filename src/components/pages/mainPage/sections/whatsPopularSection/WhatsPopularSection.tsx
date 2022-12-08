import { MOVIE, SEE_ALL, TV } from 'constants/common';
import { tempList } from 'constants/lists';

import React from 'react';

import { EmptyCard } from 'components/common/card/EmptyCard/EmptyCard';
import { ExtraCard } from 'components/common/card/ExtraCard/ExtraCard';
import { MovieCard } from 'components/common/card/MovieСard/MovieСard';
import { SliderContainer } from 'components/common/slider/Slider';
import { Switcher } from 'components/common/switcher/Switcher';
import {
  StyledMainSectionContainer,
  StyledMainSectionContentContainer,
  StyledMainSectionFiltersContainer,
  StyledMainSectionFiltersWrapper,
  StyledMainSectionHeader,
  StyledMainSectionLinkTitle,
} from 'components/pages/mainPage/sections/commonStyles';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { PATH } from 'routes/routes';
import { ComponentType } from 'types/common/componentType';

import { WhatsPopularSectionPropsType } from './types';

export const WhatsPopularSection = observer(
  (props: WhatsPopularSectionPropsType): ComponentType => {
    const { popularTVShows, popularMovies, filter } = props;

    const { mainStore } = useStore();

    const emptyCardsCondition = popularTVShows.length === 0 && popularMovies.length === 0;
    const extraCardCondition = popularTVShows.length !== 0 || popularMovies.length !== 0;

    const onTVFilterClick = (): void => {
      mainStore.setWhatsPopularFilter(TV);
    };

    const onMoviesFilterClick = (): void => {
      mainStore.setWhatsPopularFilter(MOVIE);
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
              tempList.map((tempEmptyCard) => <EmptyCard key={tempEmptyCard} />)}
            {filter === TV &&
              popularTVShows.map((tvShowCard) => (
                <MovieCard
                  key={tvShowCard.id}
                  movieID={tvShowCard.id}
                  posterPath={tvShowCard.poster_path ? tvShowCard.poster_path : ''}
                  releaseDate={tvShowCard.first_air_date}
                  title={tvShowCard.name}
                  voteAverage={tvShowCard.vote_average}
                />
              ))}
            {filter === MOVIE &&
              popularMovies.map((movieCard) => (
                <MovieCard
                  key={movieCard.id}
                  movieID={movieCard.id}
                  posterPath={movieCard.poster_path ? movieCard.poster_path : ''}
                  releaseDate={movieCard.release_date ? movieCard.release_date : ''}
                  title={movieCard.title ? movieCard.title : ''}
                  voteAverage={movieCard.vote_average ? movieCard.vote_average : 0}
                />
              ))}
            {extraCardCondition && (
              <ExtraCard
                link={`${filter === TV ? PATH.TV_SHOWS : PATH.MOVIES}/${PATH.POPULAR}`}
                title={SEE_ALL}
              />
            )}
          </SliderContainer>
        </StyledMainSectionContentContainer>
      </StyledMainSectionContainer>
    );
  },
);
