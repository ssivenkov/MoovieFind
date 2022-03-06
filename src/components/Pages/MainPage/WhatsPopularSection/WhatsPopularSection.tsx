import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { ExtraCard } from 'components/common/Card/ExtraCard';
import { MovieCard } from 'components/common/Card/MovieСard';
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
import { MOVIE, TV, ZERO } from 'constants/common';
import { tempList } from 'constants/lists';
import { PATH } from 'routes/routes';
import { setWhatsPopularFilter } from 'store/actions/mainActions';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { WhatsPopularSectionPropsType } from 'types/components/MainTypes/WhatsPopularSectionTypes/WhatsPopularSectionType';
import { MovieType } from 'types/reducers/movieReducerTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

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
        <StyledMainSectionLinkTitle
          to={`${filter === TV ? PATH.TVSHOWS : PATH.MOVIES}/${PATH.POPULAR}`}
        >
          What&apos;s popular
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
        </StyledMainSectionFiltersWrapper>
      </StyledMainSectionHeader>
      <StyledMainSectionContentContainer>
        <SliderContainer>
          {popularList.length === ZERO &&
            tempList.map(tempEmptyCard => <TempEmptyCard key={tempEmptyCard} />)}
          {filter === TV &&
            popularList.map((popularTVShow: TVShowType) => (
              <MovieCard
                key={popularTVShow.id}
                posterPath={popularTVShow.poster_path ? popularTVShow.poster_path : ''}
                title={popularTVShow.name}
                voteAverage={popularTVShow.vote_average}
                releaseDate={popularTVShow.first_air_date}
              />
            ))}
          {filter === MOVIE &&
            popularList.map((popularMovie: MovieType) => (
              <MovieCard
                key={popularMovie.id}
                posterPath={popularMovie.poster_path ? popularMovie.poster_path : ''}
                title={popularMovie.title}
                voteAverage={popularMovie.vote_average}
                releaseDate={popularMovie.release_date}
              />
            ))}
          {popularList.length !== ZERO && (
            <ExtraCard
              link={`${filter === TV ? PATH.TVSHOWS : PATH.MOVIES}/${PATH.POPULAR}`}
              title="See all"
            />
          )}
        </SliderContainer>
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
