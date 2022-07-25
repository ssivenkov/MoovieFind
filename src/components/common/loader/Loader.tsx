import React from 'react';

import styled from 'styled-components';

import loader from 'assets/images/loader.svg';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

const StyledLoader = styled.img`
  user-select: none;
`;

export const Loader = React.memo(
  (): ReturnComponentType => <StyledLoader src={loader} alt="loader" />,
);
