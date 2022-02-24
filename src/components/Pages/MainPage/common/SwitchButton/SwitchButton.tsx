import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from 'types/common/ReturnComponentType';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonType = DefaultButtonPropsType & {
  active: boolean;
  title?: string;
  className?: string;
  condition?: boolean;
  id?: string;
};

interface StyledSwitchButtonPropsType {
  active: boolean;
}

const StyledSwitchButton = styled.button<StyledSwitchButtonPropsType>`
  padding: 7px;
  margin: 3px;
  border-radius: 7px;
  font-size: 16px;
  color: var(--white);
  background-color: transparent;
  &:disabled,
  &:disabled:hover {
    cursor: default;
    background-color: ${props => (props.active ? 'var(--primary)' : 'transparent')};
  }
`;

export const SwitchButton: React.FC<ButtonType> = ({
  children,
  onClick,
  type,
  disabled,
  active,
  id,
}): ReturnComponentType => (
  <StyledSwitchButton
    id={id}
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    onClick={onClick}
    disabled={disabled}
    active={active}
  >
    {children}
  </StyledSwitchButton>
);
