import styled from 'styled-components';

import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = (): ReturnComponentType => <StyledMain>Main</StyledMain>;
