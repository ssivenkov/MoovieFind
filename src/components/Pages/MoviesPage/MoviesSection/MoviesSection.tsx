import { FC } from 'react';

import styled from 'styled-components';

import { Card } from 'components/common/Card/MovieСard';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { MoovieSectionPropsType } from 'types/components/commonTypes/MovieSectionTypes/MovieSectionTypes';
import { MovieType } from 'types/reducers/movieReducerTypes';

const StyledMain = styled.div`
  width: var(--content-width);
`;

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 25px 0;
  font-size: 40px;
  font-weight: 500;
`;

const StyledMovies = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    & {
      justify-content: center;
    }
  }
`;

export const MoviesSection: FC<MoovieSectionPropsType> = ({
  moviesList,
  sectionTitle,
}): ReturnComponentType => (
  <StyledMain>
    <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
    <StyledMovies>
      {moviesList.map((movie: MovieType) => (
        <Card
          key={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
          releaseDate={movie.release_date}
        />
      ))}
    </StyledMovies>
  </StyledMain>
);
