import React from 'react';

import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import style from './Header.module.scss';

import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #505050;
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
      <div className={style.item}>
        <NavLink
          to={PATH.MAIN}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          films
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to={PATH.SERIALS}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          serials
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to={PATH.CARTOONS}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          cartoons
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to={PATH.NOVELTIES}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          novelties
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
