import {
  cardContainerStyles,
  contentContainerStyles,
  infoContainerStyles,
  lightHoverStyles,
  noContentStyles,
  textStyles,
  transitionTime,
} from 'components/common/card/commonStyles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)``;

export const StyledPosterText = styled.span`
  ${textStyles};
  opacity: 0.6;
  color: var(--textLight);
  font-size: 20px;
  transform: translate(-50%, 390%);
  font-weight: 500;
`;

export const StyledContainer = styled.div`
  ${cardContainerStyles};
  cursor: pointer;
  transition: ${transitionTime}s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
    ${StyledPosterText} {
      opacity: 1;
    }
  }
`;

export const StyledInfoContainer = styled.div`
  ${infoContainerStyles}
`;

export const StyledPosterLightContainer = styled.div`
  ${contentContainerStyles}
  ${lightHoverStyles}
`;

export const StyledEmptyPoster = styled.div`
  ${noContentStyles}
`;
