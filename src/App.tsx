import React, { FC } from 'react';

import 'Null.scss';
import styled from 'styled-components';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { RoutesContainer } from './components/RoutesContainer/RoutesContainer';

import { ReturnComponentType } from 'types/ReturnComponentType';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #0f0f1a;
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
