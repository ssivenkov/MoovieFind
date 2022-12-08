import { DefaultButtonPropsType } from 'components/common/button/types';

export type SwitcherPropsType = DefaultButtonPropsType & {
  isActive: boolean;

  title?: string;
  className?: string;
  hasCondition?: boolean;
  id?: string;
};

export type StyledSwitchButtonPropsType = {
  active: boolean;
};
