import { FC } from 'react';

import styled from 'styled-components';

import TVShowCard from 'components/common/TVShowCard/TVShowCard';
import { TVShowType } from 'store/reducers/TVShowsReducer';
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

const StyledTVShows = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    & {
      justify-content: center;
    }
  }
`;

type TVShowsSectionPropsType = {
  TVShowsList: Array<TVShowType>;
  sectionTitle: string;
};

export const TVShowSection: FC<TVShowsSectionPropsType> = ({
  TVShowsList,
  sectionTitle,
}): ReturnComponentType => (
  <StyledMain>
    <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
    <StyledTVShows>
      {TVShowsList.map((TVShow: TVShowType) => (
        <TVShowCard
          key={TVShow.id}
          posterPath={TVShow.poster_path}
          title={TVShow.name}
          voteAverage={TVShow.vote_average}
          releaseDate={TVShow.first_air_date}
        />
      ))}
    </StyledTVShows>
  </StyledMain>
);
