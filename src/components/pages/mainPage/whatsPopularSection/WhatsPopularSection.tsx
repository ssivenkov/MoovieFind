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
import { MOVIE, TV, ZERO } from 'constants/common';
import { tempList } from 'constants/lists';
import { PATH } from 'routes/routes';
import { setWhatsPopularFilterAction } from 'store/actions/mainReducerActions/setWhatsPopularFilterAction';
import { MovieType } from 'store/reducers/moviesReducer/types';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { WhatsPopularSectionPropsType } from 'types/components/MainTypes/WhatsPopularSectionTypes/WhatsPopularSectionType';

export const WhatsPopularSection: FC<WhatsPopularSectionPropsType> = ({
  popularList,
  filter,
}): ReturnComponentType => {
  const dispatch = useDispatch();
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
                movieID={popularTVShow.id}
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
                movieID={popularMovie.id}
                key={popularMovie.id}
                posterPath={popularMovie.poster_path ? popularMovie.poster_path : ''}
                title={popularMovie.title ? popularMovie.title : ''}
                voteAverage={popularMovie.vote_average ? popularMovie.vote_average : ZERO}
                releaseDate={popularMovie.release_date ? popularMovie.release_date : ''}
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
