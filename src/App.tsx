import React, { FC } from 'react';

import 'Null.module.scss';
import style from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { RoutesContainer } from './components/RoutesContainer/RoutesContainer';

import { ErrorAll } from 'components/common/ErrorPages/ErrorAll';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const App: FC = (): ReturnComponentType => (
  <div className={style.globalContainer}>
    <ErrorAll />
    <Header />
    <RoutesContainer />
    <Footer />
  </div>
);
