import React from 'react';

import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonsContainer, Container, ContentContainer } from './styles';

import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import { modalTextSelector } from 'store/selectors/appSelectors';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

export const Modal = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const modalText = useSelector(modalTextSelector);

  const onCancelPress = (): any => {
    dispatch(setModalTextAction({ modalText: '' }));
  };

  if (!modalText) {
    return null;
  }

  return ReactDOM.createPortal(
    <Container>
      <ContentContainer>
        <p>{modalText}</p>
        <ButtonsContainer>
          <button type="button" onClick={onCancelPress}>
            Close
          </button>
        </ButtonsContainer>
      </ContentContainer>
    </Container>,
    document.getElementById('portal')!,
  );
};
