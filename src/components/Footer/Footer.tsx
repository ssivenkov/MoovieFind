import React from 'react';

import { ContactButton } from './ContactButton/ContactButton';
import style from './Footer.module.scss';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Footer = (): ReturnComponentType => (
  <div className={style.container}>
    <div className={style.contactsContainer}>
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
    </div>
  </div>
);
