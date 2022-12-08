import styled from 'styled-components';

import { StyledSwitchButtonPropsType } from './types';

export const StyledSwitchButton = styled.button<StyledSwitchButtonPropsType>`
  padding: 7px;
  margin: 3px;
  border-radius: 7px;
  font-size: 16px;
  color: var(--textLight);
  background-color: transparent;
  &:disabled,
  &:disabled:hover {
    cursor: default;
    background-color: ${(props) => (props.active ? 'var(--primary)' : 'transparent')};
  }
`;
