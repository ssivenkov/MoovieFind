import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMoovie = styled.div`
  margin: 0 12px 20px 12px;
`;

const StyledMoovieImage = styled.div`
  width: 150px;
  height: 230px;
  border-radius: 10px;
  background-color: #87293a;
  transition: 0.4s ease-out;
  &:hover {
    transform: scale(1.08);
  }
`;

const StyledMoovieTitle = styled.div`
  margin-top: 10px;
  font-size: 17px;
`;

const Moovie = (): ReturnComponentType => {
  console.log('moovie render');
  return (
    <StyledMoovie>
      <StyledMoovieImage />
      <StyledMoovieTitle>Movie title</StyledMoovieTitle>
    </StyledMoovie>
  );
};

export default Moovie;
