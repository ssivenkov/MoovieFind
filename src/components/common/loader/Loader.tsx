import React from 'react';

import loader from 'assets/images/loader.svg';
import { ComponentType } from 'types/common/componentType';

import { StyledLoader } from './styles';

export const Loader = (): ComponentType => (
  <StyledLoader alt='loading animation' src={loader} />
);
