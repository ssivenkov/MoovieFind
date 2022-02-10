import React, { FC } from 'react';

import 'Null.scss';
import styled from 'styled-components';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { RoutesContainer } from './components/RoutesContainer/RoutesContainer';

import { ErrorAll } from 'components/common/ErrorPages/ErrorAll';
import { ReturnComponentType } from 'types/ReturnComponentType';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0f0f1a;
`;

export const App: FC = (): ReturnComponentType => (
  <AppWrapper>
    <ErrorAll />
    <Header />
    <RoutesContainer />
    <Footer />
  </AppWrapper>
);
