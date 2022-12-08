import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const StyledAppLogoContainer = styled.div`
  height: 100%;
  margin-right: 20px;
`;

export const StyledHeaderLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-weight: 500;
  line-height: 1.08;
  text-align: center;
  color: var(--textLight);
  border-radius: 7px;
`;

export const StyledAppLogo = styled.img`
  height: 100%;
  user-select: none;
`;

export const StyledCategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledAuthContainer = styled.div`
  display: flex;
`;
