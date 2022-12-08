import { MovieCard } from 'components/common/card/MovieСard/MovieСard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles';
import { MovieCardType } from 'store/movieCardsStore/types';
import { ComponentType } from 'types/common/componentType';

import { MovieSectionPropsType } from './types';

export const MoviesSection = (props: MovieSectionPropsType): ComponentType => {
  const { moviesList, sectionTitle } = props;

  return (
    <StyledSection>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <StyledSectionContent>
        {moviesList.map((movie: MovieCardType) => (
          <MovieCard
            key={movie.id}
            movieID={movie.id}
            posterPath={movie.poster_path ? movie.poster_path : ''}
            releaseDate={movie.release_date ? movie.release_date : ''}
            title={movie.title ? movie.title : ''}
            voteAverage={movie.vote_average ? movie.vote_average : 0}
          />
        ))}
      </StyledSectionContent>
    </StyledSection>
  );
};
