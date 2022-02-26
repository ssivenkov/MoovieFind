import { FC } from 'react';

import styled from 'styled-components';

import { Card } from 'components/common/Card/MovieСard';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { TVShowsSectionPropsType } from 'types/components/commonTypes/TVShowSectionTypes/TVShowSectionTypes';
import { TVShowType } from 'types/reducers/TVShowsReducerTypes';

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

export const TVShowsSection: FC<TVShowsSectionPropsType> = ({
  TVShowsList,
  sectionTitle,
}): ReturnComponentType => (
  <StyledMain>
    <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
    <StyledTVShows>
      {TVShowsList.map((TVShow: TVShowType) => (
        <Card
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
