import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MoovieCard from 'components/common/MoovieCard/MoovieCard';
import { ZERO } from 'constants/common';
import { FilmType } from 'store/reducers/filmsReducer';
import { AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMain = styled.div`
  width: var(--content-width);
`;

const StyledTitle = styled.div`
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

export const Films = (): ReturnComponentType => {
  const films = useSelector<AppRootStateType, Array<FilmType>>(
    state => state.films.films,
  );
  console.log(films[ZERO]);
  if (films.length !== ZERO) {
    return (
      <StyledMain>
        <StyledTitle>Films</StyledTitle>
        <StyledMoovies>
          {films.map((film: FilmType) => (
            <MoovieCard
              key={film.id}
              posterPath={film.poster_path}
              title={film.title}
              voteAverage={film.vote_average}
              releaseDate={film.release_date}
            />
          ))}
        </StyledMoovies>
      </StyledMain>
    );
  }
  return <div>Films not found</div>;
};
