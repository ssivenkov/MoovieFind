import React from 'react';

import styled from 'styled-components';

import { ContactButton } from './ContactButton';

import tmdbLogo from 'assets/images/tmdb_logo.svg';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const StyledTmdbContainer = styled.div`
  margin: 5px 0 20px 0;
`;

const StyledTmdbLogo = styled.img`
  display: block;
  margin-top: 10px;
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
    <StyledTmdbContainer>
      data provided by
      <a href="https://themoviedb.org" target="_blank" rel="noreferrer">
        <StyledTmdbLogo src={tmdbLogo} alt="tmdb logo" />
      </a>
    </StyledTmdbContainer>
  </StyledFooter>
);
