import { FC } from 'react';

import { MovieCard } from 'components/common/Card/MovieСard';
import {
  StyledSection,
  StyledSectionContent,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/Pages/commonStyles/Styles';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { MoovieSectionPropsType } from 'types/components/commonTypes/MovieSectionTypes/MovieSectionTypes';
import { MovieType } from 'types/reducers/movieReducerTypes';

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
          posterPath={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          releaseDate={movie.release_date}
        />
      ))}
    </StyledSectionContent>
  </StyledSection>
);
