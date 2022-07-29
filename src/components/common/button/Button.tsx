import React from 'react';

import { ButtonPropsType } from 'components/common/button/types';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

type StyledButtonPropsType = {
  disabled?: boolean;
};

const StyledButton = styled.button<StyledButtonPropsType>`
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 500;
  background-color: ${(props) => (props.disabled ? 'var(--gray)' : 'var(--primary)')};
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
  color: var(--white);
  @media (pointer: coarse) {
    & {
      padding: 8px 16px;
    }
    &:active {
      box-shadow: ${(props) =>
        props.disabled ? 'none' : '0 0 10px 4px var(--primary_almost-medium)'};
    }
  }
  @media (pointer: fine) {
    &:hover {
      box-shadow: ${(props) =>
        props.disabled ? 'none' : '0 0 10px 4px var(--primary_almost-medium)'};
    }
  }
`;

export const Button = (props: ButtonPropsType): ComponentType => {
  const { children, onClick, type, disabled, id } = props;

  return (
    <StyledButton disabled={disabled} id={id} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
