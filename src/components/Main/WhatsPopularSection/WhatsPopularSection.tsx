import React, { FC, useRef } from 'react';

import { useDispatch } from 'react-redux';

import Card from 'components/common/Card/Сard';
import { SliderContainer } from 'components/common/Slider/Slider';
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
import { setWhatsPopularFilter } from 'store/actions/mainActions';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { WhatsPopularSectionPropsType } from 'types/components/Main/WhatsPopularSection/WhatsPopularSectionType';
import { MovieType } from 'types/reducers/movieReducerType';
import { TVShowType } from 'types/reducers/TVShowsReducerType';

export const WhatsPopularSection: FC<WhatsPopularSectionPropsType> = ({
  popularList,
  filter,
  fixSlider,
}): ReturnComponentType => {
  const dispatch = useDispatch();
  const sliderRef = useRef<HTMLDivElement>(null);
  const onTVFilterClick = (): void => {
    dispatch(setWhatsPopularFilter(TV));
    fixSlider(sliderRef);
  };
  const onMoviesFilterClick = (): void => {
    dispatch(setWhatsPopularFilter(MOVIE));
    fixSlider(sliderRef);
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
        <div ref={sliderRef}>
          <SliderContainer>
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
        </div>
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
