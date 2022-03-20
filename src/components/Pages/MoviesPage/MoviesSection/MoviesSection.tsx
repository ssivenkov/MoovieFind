import { FC } from 'react';

import { MovieCard } from 'components/common/Card/MovieСard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/Pages/commonStyles/Styles';
import { ZERO } from 'constants/common';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { MoovieSectionPropsType } from 'types/components/commonTypes/MovieSectionTypes/MovieSectionTypes';
import { MovieType } from 'types/reducers/moviesReducerTypes';

export const MoviesSection: FC<MoovieSectionPropsType> = ({
  moviesList,
  sectionTitle,
}): ReturnComponentType => (
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
          title={movie.title ? movie.title : ''}
          voteAverage={movie.vote_average ? movie.vote_average : ZERO}
          releaseDate={movie.release_date ? movie.release_date : ''}
        />
      ))}
    </StyledSectionContent>
  </StyledSection>
);
