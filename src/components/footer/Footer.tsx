import React from 'react';

import tmdbLogo from 'assets/images/tmdb_logo.svg';
import { ContactButton } from 'components/footer/contactButton/ContactButton';
import { FaGithub, FaLinkedinIn, FaSkype, FaTelegram } from 'react-icons/fa';
import { ComponentType } from 'types/common/componentType';

import {
  StyledContactsContainer,
  StyledFooter,
  StyledTmdbContainer,
  StyledTmdbLogo,
} from './styles';

export const Footer = (): ComponentType => (
  <StyledFooter>
    <StyledContactsContainer>
      <ContactButton
        icon={<FaLinkedinIn />}
        link='https://www.linkedin.com/in/ssivenkov'
      />
      <ContactButton icon={<FaTelegram />} link='https://t.me/orihiru' />
      <ContactButton icon={<FaGithub />} link='https://github.com/ssivenkov' />
      <ContactButton
        icon={<FaSkype />}
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
