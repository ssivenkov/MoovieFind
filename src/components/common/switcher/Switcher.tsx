import React from 'react';

import { ComponentType } from 'types/common/componentType';

import { StyledSwitchButton } from './styles';
import { SwitcherPropsType } from './types';

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
