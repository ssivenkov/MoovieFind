import { SOURCE_SANS_PRO } from 'enum/fontFamilies';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { cardStyles } from '../commonStyles';

export const StyledExtraCardContainer = styled(Link)`
  ${cardStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const StyledTitle = styled.div`
  font-family: ${SOURCE_SANS_PRO.SEMI_BOLD};
  color: var(--textLight);
  font-size: 18px;
  text-align: center;
  margin: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
