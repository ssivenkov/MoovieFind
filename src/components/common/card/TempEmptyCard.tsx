import React from 'react';

import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

const StyledMovie = styled.div`
  width: 150px;
  margin: 18px 12px 15px 12px;
`;

const StyledMovieContainer = styled.div`
  transition: 0.22s ease-out;
  width: 150px;
  height: 230px;
  border-radius: 10px;
  background-color: var(--primary_almost-medium);
`;

const StyledMovieTitle = styled.div`
  margin-top: 10px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  height: 1.2em;
  text-overflow: ellipsis;
`;

export const TempEmptyCard = (): ComponentType => (
  <StyledMovie>
    <StyledMovieContainer />
    <StyledMovieTitle>Movie</StyledMovieTitle>
  </StyledMovie>
);
