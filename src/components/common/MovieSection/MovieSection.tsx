import { FC } from 'react';

import styled from 'styled-components';

import Card from 'components/common/Card/Сard';
import { MovieType } from 'store/reducers/moviesReducer';
import { ReturnComponentType } from 'types/ReturnComponentType';

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

type MoovieSectionPropsType = {
  moviesList: Array<MovieType>;
  sectionTitle: string;
};

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
