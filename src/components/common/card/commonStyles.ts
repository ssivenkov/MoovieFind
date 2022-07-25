import { css } from 'styled-components';

export const StyledContainer = css`
  width: 150px;
  margin: 18px 12px 15px 12px;
`;

export const StyledSize = css`
  width: 150px;
  height: 230px;
  border-radius: 10px;
  user-select: none;
  object-fit: cover;
`;

export const StyledInfoContainer = css`
  z-index: 40;
  position: relative;
  transition: 0.22s ease-out;
`;

export const StyledNoContent = css`
  ${StyledSize};
  background-color: rgba(255, 255, 255, 0.1);
`;

export const StyledText = css`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 700;
  white-space: nowrap;
  transition: 0.22s ease-out;
  pointer-events: none;
`;

export const StyledContentContainer = css`
  position: relative;
  transition: 0.22s ease-out;
  z-index: 20;
  &:before {
    content: '';
    width: 150px;
    height: 230px;
    position: absolute;
    border-radius: 9px;
    background-color: transparent;
    transition: 0.22s ease-out;
  }
`;

export const StyledLightHover = css`
  &:hover {
    &:before {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const StyledDarkHover = css`
  &:hover {
    &:before {
      background-color: rgba(7, 5, 14, 0.8);
    }
  }
`;

export const StyledCardTitle = css`
  margin-top: 10px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  height: 1.2em;
  text-overflow: ellipsis;
`;
