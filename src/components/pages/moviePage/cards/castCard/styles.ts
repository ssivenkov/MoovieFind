import { SOURCE_SANS_PRO } from 'enum/fontFamilies';
import styled from 'styled-components';

import { cardStyles } from '../commonStyles';

export const StyledCastCardContainer = styled.div`
  ${cardStyles};
  margin-right: 8px;
  border: 1px solid #555;
  &:first-child {
    margin-left: 0;
  }
`;

export const StyledPoster = styled.img`
  height: 176px;
`;

export const StyledTextContainer = styled.div`
  margin: 10px;
`;

export const StyledName = styled.p`
  font-family: ${SOURCE_SANS_PRO.SEMI_BOLD};
  word-break: break-word;
`;

export const StyledRole = styled.p`
  font-size: 14.4px;
  word-break: break-word;
`;
