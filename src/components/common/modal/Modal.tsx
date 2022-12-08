import React from 'react';

import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import ReactDOM from 'react-dom';
import { ComponentType } from 'types/common/componentType';

import { Button } from './button/Button';
import {
  ButtonsContainer,
  CenteringContainer,
  ContentContainer,
  ModalContainer,
} from './styles';

export const Modal = observer((): ComponentType => {
  const { appStore } = useStore();

  const modalTextValue = appStore.modalText;
  const modalTextMaxLength = 780;

  const modalText = (): string => {
    if (modalTextValue.length > modalTextMaxLength) {
      let text = modalTextValue.slice(0, modalTextMaxLength);
      const lastSpaceCondition = text.lastIndexOf(' ');

      if (lastSpaceCondition > 0) {
        text = text.substring(0, lastSpaceCondition);
      }

      return text + '...';
    } else return modalTextValue;
  };

  const portalElement = document.getElementById('portal');

  const onCloseClick = (): void => {
    appStore.setModalText('');
  };

  if (portalElement !== null && !!modalTextValue) {
    return ReactDOM.createPortal(
      <CenteringContainer>
        <ModalContainer>
          <ContentContainer>
            <span>{modalText()}</span>
          </ContentContainer>
          <ButtonsContainer>
            <Button
              leftRounding={true}
              onCLick={onCloseClick}
              rightRounding={true}
              title='Close'
            />
          </ButtonsContainer>
        </ModalContainer>
      </CenteringContainer>,
      portalElement,
    );
  }

  return null;
});
