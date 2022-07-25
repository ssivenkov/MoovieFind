import React, { FC } from 'react';

import styled from 'styled-components';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { RoutesContainer } from 'components/routesContainer/RoutesContainer';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #0f0f1a;
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: var(--content-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1500px) {
    & {
      --content-width: 900px;
    }
  }
  @media (max-width: 1000px) {
    & {
      --content-width: 350px;
    }
  }
  @media (max-width: 400px) {
    & {
      --content-width: 180px;
    }
  }
`;

export const App: FC = (): ReturnComponentType => (
  <AppContainer>
    <AppWrapper>
      <Header />
      <RoutesContainer />
      <Footer />
    </AppWrapper>
  </AppContainer>
);
