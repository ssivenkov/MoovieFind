import { MovieCard } from 'components/common/card/MovieСard/MovieСard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles';
import { TVShowCardType } from 'store/tvShowCardsStore/types';
import { ComponentType } from 'types/common/componentType';

import { TVShowsSectionPropsType } from './types';

export const TVShowsSection = (props: TVShowsSectionPropsType): ComponentType => {
  const { tvShowsList, sectionTitle } = props;

  return (
    <StyledSection>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <StyledSectionContent>
        {tvShowsList.map((tvShow: TVShowCardType) => (
          <MovieCard
            key={tvShow.id}
            movieID={tvShow.id}
            posterPath={tvShow.poster_path ? tvShow.poster_path : ''}
            releaseDate={tvShow.first_air_date ? tvShow.first_air_date : ''}
            title={tvShow.name ? tvShow.name : ''}
            voteAverage={tvShow.vote_average ? tvShow.vote_average : 0}
          />
        ))}
      </StyledSectionContent>
    </StyledSection>
  );
};
