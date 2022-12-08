import React from 'react';

import { ComponentType } from 'types/common/componentType';

import { StyledButton } from './styles';
import { ModalButtonPropsType } from './types';

export const Button = (props: ModalButtonPropsType): ComponentType => {
  const { disabled, leftRounding, onCLick, rightRounding, title } = props;

  return (
    <StyledButton
      disabled={disabled}
      leftRounding={leftRounding}
      onClick={onCLick}
      rightRounding={rightRounding}
    >
      {title}
    </StyledButton>
  );
};
