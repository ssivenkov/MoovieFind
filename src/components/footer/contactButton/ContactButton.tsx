import React from 'react';

import { ContactButtonPropsType } from 'components/footer/contactButton/types';
import styled from 'styled-components';

const StyledContactButton = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 12px 0;
  font-size: 35px;
  border-radius: 50%;
  color: var(--primary_dark);
  background-color: var(--primary);

  @media (pointer: coarse) {
    &:active {
      box-shadow: 0 0 9px 1px var(--primary_light);
    }
  }

  @media (pointer: fine) {
    &:hover {
      border: 2px solid var(--primary_light);
      box-shadow: 0 0 13px 1px var(--primary);
      text-shadow: 0 0 15px var(--primary), 0 0 5px var(--primary);
    }
    &:active {
      box-shadow: 0 0 9px 1px var(--primary_light);
    }
  }
`;

export const ContactButton = (props: ContactButtonPropsType) => {
  const { link, iconClass } = props;

  return (
    <StyledContactButton href={link} rel='noreferrer' target='_blank'>
      <span className={`fab ${iconClass}`} />
    </StyledContactButton>
  );
};
