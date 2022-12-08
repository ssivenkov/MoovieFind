import { COLORS } from 'colors/colors';
import { SOURCE_SANS_PRO } from 'enum/fontFamilies';
import styled, { css } from 'styled-components';

const photoStyles = css`
  width: 66px;
  height: 66px;
  margin: 7px 0;
  border-radius: 5px;
`;

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledPhotoContainer = styled.div``;

export const StyledPhoto = styled.img`
  ${photoStyles};
`;

export const StyledEmptyPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${photoStyles};
  font-size: 42px;
  color: ${COLORS.MINE_SHAFT};
  background-color: ${COLORS.SCORPION};
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const StyledName = styled.span`
  font-family: ${SOURCE_SANS_PRO.SEMI_BOLD};
`;

export const StyledSecondString = styled.span`
  font-family: ${SOURCE_SANS_PRO.LIGHT};
  font-size: 15px;
`;
