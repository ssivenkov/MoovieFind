import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from 'types/ReturnComponentType';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonType = DefaultButtonPropsType & {
  title?: string;
  className?: string;
  condition?: boolean;
  id?: string;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 500;
  background-color: var(--primary);
  color: var(--white);
  @media (pointer: coarse) {
    & {
      padding: 8px 16px;
    }
    &:active {
      box-shadow: 0 0 6px 3px var(--primary_medium);
    }
  }
  @media (pointer: fine) {
    &:hover {
      box-shadow: 0 0 6px 3px var(--primary_medium);
    }
  }
`;

export const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  type,
  disabled,
  id,
}): ReturnComponentType => (
  <StyledButton
    id={id}
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);
