import { FC } from 'react';

import { MovieCard } from 'components/common/card/MovieСard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles/Styles';
import { ZERO } from 'constants/common';
import { TVShowType } from 'store/reducers/tvShowsReducer/types';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { TVShowsSectionPropsType } from 'types/components/commonTypes/TVShowSectionTypes/TVShowSectionTypes';

export const TVShowsSection: FC<TVShowsSectionPropsType> = ({
  TVShowsList,
  sectionTitle,
}): ReturnComponentType => (
  <StyledSection>
    <StyledSectionTitleContainer>
      <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
    </StyledSectionTitleContainer>
    <StyledSectionContent>
      {TVShowsList.map((TVShow: TVShowType) => (
        <MovieCard
          movieID={TVShow.id}
          key={TVShow.id}
          posterPath={TVShow.poster_path ? TVShow.poster_path : ''}
          title={TVShow.name ? TVShow.name : ''}
          voteAverage={TVShow.vote_average ? TVShow.vote_average : ZERO}
          releaseDate={TVShow.first_air_date ? TVShow.first_air_date : ''}
        />
      ))}
    </StyledSectionContent>
  </StyledSection>
);
