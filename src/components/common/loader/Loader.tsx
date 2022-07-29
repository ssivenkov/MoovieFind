import React from 'react';

import loader from 'assets/images/loader.svg';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

const StyledLoader = styled.img`
  user-select: none;
`;

export const Loader = (): ComponentType => <StyledLoader alt='loader' src={loader} />;
