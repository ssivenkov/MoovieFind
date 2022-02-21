import { FC } from 'react';

import styled from 'styled-components';

import Card from 'components/common/Card/Сard';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { MoovieSectionPropsType } from 'types/components/common/MovieSection/MovieSectionType';
import { MovieType } from 'types/reducers/movieReducerType';

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

const StyledMoovies = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    & {
      justify-content: center;
    }
  }
`;

export const MovieSection: FC<MoovieSectionPropsType> = ({
  moviesList,
  sectionTitle,
}): ReturnComponentType => (
  <StyledMain>
    <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
    <StyledMoovies>
      {moviesList.map((moovie: MovieType) => (
        <Card
          key={moovie.id}
          posterPath={moovie.poster_path}
          title={moovie.title}
          voteAverage={moovie.vote_average}
          releaseDate={moovie.release_date}
        />
      ))}
    </StyledMoovies>
  </StyledMain>
);
