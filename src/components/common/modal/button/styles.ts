import { COLORS } from 'colors/colors';
import styled from 'styled-components';

type StyledButtonPropsType = {
  disabled?: boolean;
  leftRounding?: boolean;
  rightRounding?: boolean;
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  padding: 10px 15px;
  border-bottom-left-radius: ${(props) => (props.leftRounding ? '10px' : '0')};
  border-bottom-right-radius: ${(props) => (props.rightRounding ? '10px' : '0')};
  background: ${(props) =>
    props.disabled
      ? 'var(--disabled)'
      : `linear-gradient(0deg, ${COLORS.COD_GRAY} 0%, ${COLORS.OUTER_SPACE} 100%)`};
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
`;
