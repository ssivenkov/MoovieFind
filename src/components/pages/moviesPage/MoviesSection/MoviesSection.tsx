import { MovieCard } from 'components/common/card/MovieСard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles/Styles';
import { MovieType } from 'store/reducers/moviesReducer/types';
import { ComponentType } from 'types/common/componentType';

import { MoovieSectionPropsType } from './types';

export const MoviesSection = (props: MoovieSectionPropsType): ComponentType => {
  const { moviesList, sectionTitle } = props;

  return (
    <StyledSection>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <StyledSectionContent>
        {moviesList.map((movie: MovieType) => (
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
