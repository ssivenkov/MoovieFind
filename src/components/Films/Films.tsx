import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MoovieCard from 'components/common/MoovieCard/MoovieCard';
import { ZERO } from 'constants/common';
import { AppRootStateType } from 'store/store';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMain = styled.div`
  width: 1250px;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const StyledMoovies = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Films = (): ReturnComponentType => {
  const films = useSelector<AppRootStateType, any>(state => state.films.films);
  console.log(films[ZERO]);
  if (films.length !== ZERO) {
    return (
      <StyledMain>
        <StyledTitle>Films</StyledTitle>
        <StyledMoovies>
          {films.map((film: any) => (
            <MoovieCard key={film.id} poster={film.poster_path} title={film.title} />
          ))}
        </StyledMoovies>
      </StyledMain>
    );
  }
  return <div>Films not found</div>;
};
