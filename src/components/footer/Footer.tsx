import React from 'react';

import styled from 'styled-components';

import tmdbLogo from 'assets/images/tmdb_logo.svg';
import { ContactButton } from 'components/footer/ContactButton';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-top: 1px solid #505050;
`;

const StyledContactsContainer = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
`;

const StyledTmdbContainer = styled.div`
  margin: 5px 0 20px 0;
`;

const StyledTmdbLogo = styled.img`
  display: block;
  margin-top: 10px;
  user-select: none;
  &:hover {
    filter: drop-shadow(0 0 10px rgba(0, 100, 255, 1));
  }
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
