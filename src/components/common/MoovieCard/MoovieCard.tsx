import React, { FC } from 'react';

import styled from 'styled-components';

import { imageSource } from 'api/config';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMoovie = styled.div`
  width: 150px;
  margin: 0 12px 30px 12px;
`;

const StyledMoovieImage = styled.img`
  width: 150px;
  height: 230px;
  border-radius: 10px;
  background-color: var(--primary_almost-medium);
  object-fit: cover;
  transition: 0.22s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
  }
`;

const StyledMoovieTitle = styled.div`
  margin-top: 10px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type MoovieCardPropsType = {
  title: string;
  poster: any;
};

const MoovieCard: FC<MoovieCardPropsType> = ({ poster, title }): ReturnComponentType => {
  console.log('moovie render');

  return (
    <StyledMoovie>
      <StyledMoovieImage
        src={`${imageSource}${poster}`}
        alt={`poster for the movie ${title}`}
      />
      <StyledMoovieTitle>{title}</StyledMoovieTitle>
    </StyledMoovie>
  );
};

export default MoovieCard;
