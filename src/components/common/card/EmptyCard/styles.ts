import {
  cardContainerStyles,
  sizeStyles,
  titleStyles,
  transitionTime,
} from 'components/common/card/commonStyles';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  ${cardContainerStyles}
`;

export const StyledEmptyPoster = styled.div`
  transition: ${transitionTime}s ease-out;
  ${sizeStyles};
  border-radius: 10px;
  background-color: var(--primary_medium);
`;

export const StyledTitle = styled.div`
  ${titleStyles}
`;
