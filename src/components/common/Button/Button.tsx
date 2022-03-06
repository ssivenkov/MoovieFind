import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { ButtonType } from 'types/components/commonTypes/ButtonTypes/ButtonTypes';

type StyledButtonPropsType = {
  disabled: boolean | undefined;
};

const StyledButton = styled.button<StyledButtonPropsType>`
  padding: 10px 20px;
  border-radius: 7px;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 500;
  background-color: ${props => (props.disabled ? 'var(--gray)' : 'var(--primary)')};
  cursor: ${props => (props.disabled ? 'initial' : 'pointer')};
  color: var(--white);
  @media (pointer: coarse) {
    & {
      padding: 8px 16px;
    }
    &:active {
      box-shadow: ${props =>
        props.disabled ? 'none' : '0 0 10px 4px var(--primary_almost-medium)'};
    }
  }
  @media (pointer: fine) {
    &:hover {
      box-shadow: ${props =>
        props.disabled ? 'none' : '0 0 10px 4px var(--primary_almost-medium)'};
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
