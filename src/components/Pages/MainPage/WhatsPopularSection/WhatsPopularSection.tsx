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
import { MOVIE, TV, ZERO } from 'constants/common';
import { tempList } from 'constants/lists';
import { setWhatsPopularFilter } from 'store/actions/mainActions';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { WhatsPopularSectionPropsType } from 'types/components/Main/WhatsPopularSection/WhatsPopularSectionType';
import { MovieType } from 'types/reducers/movieReducerType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

export const WhatsPopularSection: FC<WhatsPopularSectionPropsType> = ({
  popularList,
  filter,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const onTVFilterClick = (): void => {
    dispatch(setWhatsPopularFilter(TV));
  };
  const onMoviesFilterClick = (): void => {
    dispatch(setWhatsPopularFilter(MOVIE));
  };

  return (
    <StyledMainSectionContainer>
      <StyledMainSectionHeader>
        <StyledMainSectionH2>What&apos;s popular</StyledMainSectionH2>
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
        <SliderContainer>
          {popularList.length === ZERO &&
            tempList.map(tempEmptyCard => <TempEmptyCard key={tempEmptyCard} />)}
          {filter === TV &&
            popularList.map((popularTVShow: TVShowType) => (
              <Card
                key={popularTVShow.id}
                posterPath={popularTVShow.poster_path}
                title={popularTVShow.name}
                voteAverage={popularTVShow.vote_average}
                releaseDate={popularTVShow.first_air_date}
              />
            ))}
          {filter === MOVIE &&
            popularList.map((popularMovie: MovieType) => (
              <Card
                key={popularMovie.id}
                posterPath={popularMovie.poster_path}
                title={popularMovie.title}
                voteAverage={popularMovie.vote_average}
                releaseDate={popularMovie.release_date}
              />
            ))}
        </SliderContainer>
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
