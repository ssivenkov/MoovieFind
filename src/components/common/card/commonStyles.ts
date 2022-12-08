import { css } from 'styled-components';

export const transitionTime = 0.22;

export const cardWidthStyles = css`
  width: 150px;
`;

export const cardHeightStyles = css`
  height: 230px;
`;

export const sizeStyles = css`
  ${cardWidthStyles};
  ${cardHeightStyles};
`;

export const cardContainerStyles = css`
  ${cardWidthStyles};
  margin: 18px 12px 15px 12px;
`;

export const posterStyles = css`
  display: block;
  ${sizeStyles};
  border-radius: 10px;
  user-select: none;
  object-fit: cover;
  background-color: var(--primary_medium);
`;

export const infoContainerStyles = css`
  z-index: 40;
  position: relative;
  transition: ${transitionTime}s ease-out;
`;

export const noContentStyles = css`
  ${posterStyles};
  background-color: rgba(255, 255, 255, 0.1);
`;

export const textStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 700;
  white-space: nowrap;
  transition: ${transitionTime}s ease-out;
  pointer-events: none;
`;

export const contentContainerStyles = css`
  position: relative;
  transition: ${transitionTime}s ease-out;
  z-index: 20;
  &:before {
    content: '';
    ${sizeStyles};
    position: absolute;
    border-radius: 9px;
    background-color: transparent;
    transition: ${transitionTime}s ease-out;
  }
`;

export const lightHoverStyles = css`
  &:hover {
    &:before {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const darkHoverStyles = css`
  &:hover {
    &:before {
      background-color: rgba(7, 5, 14, 0.8);
    }
  }
`;

export const titleStyles = css`
  margin-top: 10px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  height: 1.2em;
  text-overflow: ellipsis;
`;
