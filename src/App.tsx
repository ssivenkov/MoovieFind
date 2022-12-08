import React from 'react';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { RoutesContainer } from 'components/routesContainer/RoutesContainer';
import { observer } from 'mobx-react-lite';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './SimpleBar.scss';

import { Modal } from './components/common/modal/Modal';
import { AppContainer, AppWrapper } from './styles';

export const App = observer(() => (
  <SimpleBar style={{ maxHeight: '100vh', maxWidth: '100vw' }}>
    <AppContainer>
      <AppWrapper>
        <Header />
        <RoutesContainer />
        <Footer />
        <Modal />
      </AppWrapper>
    </AppContainer>
  </SimpleBar>
));
