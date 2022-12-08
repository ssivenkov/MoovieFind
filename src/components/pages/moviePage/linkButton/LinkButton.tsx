import React from 'react';

import { StyledLinkButton } from './styles';
import { LinkButtonPropsType } from './types';

export const LinkButton = (props: LinkButtonPropsType) => {
  const { link, icon } = props;

  return (
    <StyledLinkButton href={link} rel='noreferrer' target='_blank'>
      {icon}
    </StyledLinkButton>
  );
};
