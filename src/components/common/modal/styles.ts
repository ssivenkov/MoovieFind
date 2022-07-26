import styled from 'styled-components';

export const Container = styled.div`
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

export const ContentContainer = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 100px;
  border-radius: 10px;
  background-color: #444;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
