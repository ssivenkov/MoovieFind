import React from 'react';

import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { modalTextSelector } from 'store/selectors/appSelectors';
import { ComponentType } from 'types/common/componentType';

import { ButtonsContainer, Container, ContentContainer } from './styles';

export const Modal = (): ComponentType => {
  const dispatch = useDispatch();

  const modalText = useSelector(modalTextSelector);

  const portalElement = document.getElementById('portal');

  const onCancelPress = (): void => {
    dispatch(setModalTextAction({ modalText: '' }));
  };

  if (portalElement !== null && !!modalText) {
    return ReactDOM.createPortal(
      <Container>
        <ContentContainer>
          <p>{modalText}</p>
          <ButtonsContainer>
            <button onClick={onCancelPress} type='button'>
              Close
            </button>
          </ButtonsContainer>
        </ContentContainer>
      </Container>,
      portalElement,
    );
  }

  return null;
};
