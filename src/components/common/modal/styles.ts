import { COLORS } from 'colors/colors';
import styled, { css } from 'styled-components';

export const CenteringContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.55);
`;

const minModalWidth = css`
  min-width: 300px;
`;

const maxModalWidth = css`
  max-width: 60vw;
`;

export const ModalContainer = styled.div`
  ${minModalWidth};
  ${maxModalWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  ${minModalWidth};
  ${maxModalWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${COLORS.TUNDORA};
`;

export const ButtonsContainer = styled.div`
  ${minModalWidth};
  ${maxModalWidth};
  width: 100%;
  display: flex;
  justify-content: center;
`;
