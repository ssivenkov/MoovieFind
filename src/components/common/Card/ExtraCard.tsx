import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { ExtraCardPropsType } from 'types/components/commonTypes/CardTypes/CardTypes';

const StyledExtraCard = styled(Link)``;

const StyledTitle = styled.div`
  opacity: 0.6;
  position: absolute;
  top: 50%;
  left: 50%;
  white-space: nowrap;
  color: var(--white);
  font-size: 20px;
  transform: translate(-50%, 480%);
  font-weight: 500;
  pointer-events: none;
  transition: 0.22s ease-out;
`;

const StyledContainer = styled.div`
  cursor: pointer;
  transition: 0.22s ease-out;
  width: 150px;
  margin: 18px 12px 15px 12px;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
    ${StyledTitle} {
      opacity: 1;
    }
  }
`;

const StyledTitleContainer = styled.div`
  z-index: 40;
  position: relative;
  transition: 0.22s ease-out;
`;

const StyledBackgroundContentContainer = styled.div`
  transition: 0.22s ease-out;
  z-index: 20;
  &:before {
    content: '';
    width: 150px;
    height: 230px;
    position: absolute;
    border-radius: 9px;
    background-color: transparent;
    transition: 0.22s ease-out;
  }
  &:hover {
    &:before {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

const StyledBackgroundContent = styled.div`
  width: 150px;
  height: 230px;
  border-radius: 10px;
  user-select: none;
  object-fit: cover;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const ExtraCard: FC<ExtraCardPropsType> = ({
  title,
  link,
}): ReturnComponentType => (
  <StyledExtraCard to={link}>
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleContainer>
      <StyledBackgroundContentContainer>
        <StyledBackgroundContent />
      </StyledBackgroundContentContainer>
    </StyledContainer>
  </StyledExtraCard>
);
