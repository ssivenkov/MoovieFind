import React, { FC } from 'react';

import { Header } from './components/Header/Header';
import { RoutesContainer } from './components/RoutesContainer/RoutesContainer';

import { ErrorAll } from 'components/common/ErrorPages/ErrorAll';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const App: FC = (): ReturnComponentType => (
  <div>
    <ErrorAll />
    <Header />
    <RoutesContainer />
  </div>
);
