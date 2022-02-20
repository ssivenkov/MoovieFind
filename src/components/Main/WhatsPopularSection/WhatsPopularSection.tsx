import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { TVShowType } from '../../../store/reducers/TVShowsReducer';

import Card from 'components/common/Card/Сard';
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
import { ReturnComponentType } from 'types/ReturnComponentType';

type WhatsPopularSectionPropsType = {
  popularList: Array<any>;
  filter: string;
};

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
        {popularList.map((popularItem: TVShowType) => (
          <Card
            key={popularItem.id}
            posterPath={popularItem.poster_path}
            title={popularItem.name}
            voteAverage={popularItem.vote_average}
            releaseDate={popularItem.first_air_date}
          />
        ))}
      </StyledMainSectionContentContainer>
    </StyledMainSectionContainer>
  );
};
