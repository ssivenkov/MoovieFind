import React from 'react';

import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/images/logo.svg';
import style from 'components/Header/Header.module.scss';
import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/common/ReturnComponentType';

const StyledContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #505050;
`;

const StyledAppLogoContainer = styled.div`
  height: 100%;
  margin-right: 20px;
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

export const Header = (): ReturnComponentType => (
  <StyledContainer>
    <StyledCategoriesContainer>
      <StyledAppLogoContainer>
        <NavLink to={PATH.MAIN}>
          <StyledAppLogo src={logo} />
        </NavLink>
      </StyledAppLogoContainer>
      <div className={style.item}>
        <NavLink
          to={PATH.MOVIES}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          movies
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to={PATH.TVSHOWS}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          TV Shows
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to={PATH.PEOPLE}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          People
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to={PATH.SEARCH}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          Search
        </NavLink>
      </div>
    </StyledCategoriesContainer>
    <StyledAuthContainer>
      <NavLink
        to={PATH.LOGIN}
        className={({ isActive }) =>
          cn(style.item, style.authLink, { [style.active]: isActive })
        }
      >
        Login
      </NavLink>
      <NavLink
        to={PATH.REGISTRATION}
        className={({ isActive }) =>
          cn(style.item, style.authLink, { [style.active]: isActive })
        }
      >
        Registration
      </NavLink>
    </StyledAuthContainer>
  </StyledContainer>
);
