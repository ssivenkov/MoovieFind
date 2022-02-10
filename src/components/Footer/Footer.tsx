import React from 'react';

import styled from 'styled-components';

import { ContactButton } from './ContactButton/ContactButton';

import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #505050;
`;

const StyledContactsContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Footer = (): ReturnComponentType => (
  <StyledFooter>
    <StyledContactsContainer>
      <ContactButton
        link="https://www.linkedin.com/in/ssivenkov"
        iconClass="fa-linkedin-in"
      />
      <ContactButton link="https://t.me/sergei_sivenkov" iconClass="fa-telegram" />
      <ContactButton link="https://github.com/ssivenkov" iconClass="fa-github" />
      <ContactButton
        link="https://join.skype.com/invite/cdkkYBX1uutB"
        iconClass="fa-skype"
      />
    </StyledContactsContainer>
  </StyledFooter>
);
