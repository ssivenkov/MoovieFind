import React from 'react';

import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

import { StyledSwitchButtonPropsType, SwitcherPropsType } from './types';

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
    background-color: ${(props) => (props.active ? 'var(--primary)' : 'transparent')};
  }
`;

export const Switcher = (props: SwitcherPropsType): ComponentType => {
  const { children, onClick, type, disabled, isActive, id } = props;

  return (
    <StyledSwitchButton
      active={isActive}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledSwitchButton>
  );
};
