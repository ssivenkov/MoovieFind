import styled from 'styled-components';

import Moovie from 'components/common/Moovie/Moovie';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMain = styled.div`
  width: 1150px;
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
  console.log('films render');
  return (
    <StyledMain>
      <StyledTitle>Films</StyledTitle>
      <StyledMoovies>
        <Moovie />
        <Moovie />
        <Moovie />
        <Moovie />
        <Moovie />
        <Moovie />
      </StyledMoovies>
    </StyledMain>
  );
};
