import { FC } from 'react';

import { MovieCard } from 'components/common/Card/MovieСard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/Pages/commonStyles/Styles';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { TVShowsSectionPropsType } from 'types/components/commonTypes/TVShowSectionTypes/TVShowSectionTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

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
          key={TVShow.id}
          posterPath={TVShow.poster_path}
          title={TVShow.name}
          voteAverage={TVShow.vote_average}
          releaseDate={TVShow.first_air_date}
        />
      ))}
    </StyledSectionContent>
  </StyledSection>
);
