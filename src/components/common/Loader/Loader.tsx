import React from 'react';

import styled from 'styled-components';

import loader from 'assets/images/loader.svg';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledLoader = styled.img``;

export const Loader = (): ReturnComponentType => (
  <StyledLoader src={loader} alt="loader" />
);
