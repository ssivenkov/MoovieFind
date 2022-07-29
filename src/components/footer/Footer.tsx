import React from 'react';

import tmdbLogo from 'assets/images/tmdb_logo.svg';
import { ContactButton } from 'components/footer/contactButton/ContactButton';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

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

export const Footer = (): ComponentType => (
  <StyledFooter>
    <StyledContactsContainer>
      <ContactButton
        iconClass='fa-linkedin-in'
        link='https://www.linkedin.com/in/ssivenkov'
      />
      <ContactButton iconClass='fa-telegram' link='https://t.me/sergei_sivenkov' />
      <ContactButton iconClass='fa-github' link='https://github.com/ssivenkov' />
      <ContactButton
        iconClass='fa-skype'
        link='https://join.skype.com/invite/cdkkYBX1uutB'
      />
    </StyledContactsContainer>
    <StyledTmdbContainer>
      <span>data provided by</span>
      <a href='https://themoviedb.org' rel='noreferrer' target='_blank'>
        <StyledTmdbLogo alt='themoviedb.org logo' src={tmdbLogo} />
      </a>
    </StyledTmdbContainer>
  </StyledFooter>
);
