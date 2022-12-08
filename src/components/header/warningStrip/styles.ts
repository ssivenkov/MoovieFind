import { COLORS } from 'colors/colors';
import { SOURCE_SANS_PRO } from 'enum/fontFamilies';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.SUPERNOVA};
  color: ${COLORS.BLACK};
`;

export const StyledText = styled.span`
  padding: 3px 10px;
`;

export const StyledButtonsContainer = styled.div`
  margin-top: 2px;
  margin-bottom: 5px;
`;

export const StyledButton = styled.button`
  font-family: ${SOURCE_SANS_PRO.REGULAR};
  font-size: 16px;
  padding: 0 8px;
  border-radius: 5px;
  border: 1px solid ${COLORS.BLACK};
  background-color: ${COLORS.SUPERNOVA};
  margin-right: 10px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
