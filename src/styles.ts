import styled from 'styled-components';

import { MEDIUM_SCREEN, SMALL_SCREEN, WIDE_SCREEN } from './constants/common';

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #0f0f1a;
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  width: var(--content-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${WIDE_SCREEN}px) {
    & {
      --content-width: 1050px;
    }
  }
  @media (max-width: ${MEDIUM_SCREEN}px) {
    & {
      --content-width: 870px;
    }
  }
  @media (max-width: ${SMALL_SCREEN}px) {
    & {
      --content-width: 690px;
    }
  }
`;
