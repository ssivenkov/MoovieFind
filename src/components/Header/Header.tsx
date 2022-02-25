import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/images/logo.svg';
import { Dropdown } from 'components/common/Dropdown/Dropdown';
import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/common/ReturnComponentType';

const StyledContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const StyledAppLogoContainer = styled.div`
  height: 100%;
  margin-right: 20px;
`;

const StyledHeaderLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-weight: 500;
  line-height: 1.08;
  text-align: center;
  color: var(--white);
  border-radius: 7px;
`;

const StyledAppLogo = styled.img`
  height: 100%;
  user-select: none;
`;

const StyledCategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledAuthContainer = styled.div`
  display: flex;
`;

const StyledAuthLink = styled(Link)`
  color: var(--white);
  margin: 0 10px;
`;

export const Header = (): ReturnComponentType => (
  <StyledContainer>
    <StyledCategoriesContainer>
      <StyledAppLogoContainer>
        <Link to={PATH.MAIN}>
          <StyledAppLogo src={logo} />
        </Link>
      </StyledAppLogoContainer>
      <Dropdown title="Movies">
        {[
          ['Popular', `${PATH.MOVIES}/${PATH.POPULAR}`],
          ['Trending', `${PATH.MOVIES}/${PATH.TRENDING}`],
        ]}
      </Dropdown>
      <Dropdown title="TV Shows">
        {[
          ['Popular', `${PATH.TVSHOWS}/${PATH.POPULAR}`],
          ['Trending', `${PATH.TVSHOWS}/${PATH.TRENDING}`],
        ]}
      </Dropdown>
      <StyledHeaderLink to={PATH.PEOPLE}>People</StyledHeaderLink>
      <StyledHeaderLink to={PATH.SEARCH}>Search</StyledHeaderLink>
    </StyledCategoriesContainer>
    <StyledAuthContainer>
      <StyledAuthLink to={PATH.LOGIN}>Login</StyledAuthLink>
      <StyledAuthLink to={PATH.REGISTRATION}>Registration</StyledAuthLink>
    </StyledAuthContainer>
  </StyledContainer>
);
