import styled from 'styled-components';

type StyledButtonPropsType = {
  disabled?: boolean;
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  display: flex;
  align-items: center;
  padding: 11px 14px;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  background-color: ${(props) => (props.disabled ? 'var(--disabled)' : 'var(--primary)')};
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
  color: ${(props) => (props.disabled ? 'var(--disabledText)' : 'var(--textLight)')};
  @media (pointer: coarse) {
    & {
      padding: 8px 16px;
    }
    &:active {
      box-shadow: ${(props) =>
        props.disabled ? 'none' : '0 0 10px 4px var(--primary_medium)'};
    }
  }
  @media (pointer: fine) {
    &:hover {
      box-shadow: ${(props) =>
        props.disabled ? 'none' : '0 0 10px 4px var(--primary_medium)'};
    }
  }
`;