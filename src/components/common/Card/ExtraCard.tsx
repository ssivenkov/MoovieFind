import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  StyledContainer,
  StyledContentContainer,
  StyledInfoContainer,
  StyledLightHover,
  StyledNoContent,
  StyledText,
} from 'components/common/Card/commonStyles';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { ExtraCardPropsType } from 'types/components/commonTypes/CardTypes/CardTypes';

const StyledExtraCardLink = styled(Link)``;

const StyledTitle = styled.div`
  ${StyledText}
  opacity: 0.6;
  color: var(--white);
  font-size: 20px;
  transform: translate(-50%, 490%);
  font-weight: 500;
`;

const StyledExtraCardContainer = styled.div`
  ${StyledContainer}
  cursor: pointer;
  transition: 0.22s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
    ${StyledTitle} {
      opacity: 1;
    }
  }
`;

const StyledExtraCardInfoContainer = styled.div`
  ${StyledInfoContainer}
`;

const StyledBackgroundContentContainer = styled.div`
  ${StyledContentContainer}
  ${StyledLightHover}
`;

const StyledContent = styled.div`
  ${StyledNoContent}
`;

export const ExtraCard: FC<ExtraCardPropsType> = ({
  title,
  link,
}): ReturnComponentType => (
  <StyledExtraCardLink to={link}>
    <StyledExtraCardContainer>
      <StyledExtraCardInfoContainer>
        <StyledTitle>{title}</StyledTitle>
      </StyledExtraCardInfoContainer>
      <StyledBackgroundContentContainer>
        <StyledContent />
      </StyledBackgroundContentContainer>
    </StyledExtraCardContainer>
  </StyledExtraCardLink>
);
