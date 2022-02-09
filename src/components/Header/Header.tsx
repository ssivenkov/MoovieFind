import React from 'react';

import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

import { PATH } from 'routes/routes';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Header = (): ReturnComponentType => (
  <div className={style.container}>
    <div className={style.categoriesContainer}>
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
    </div>
    <div className={style.userContainer}>
      <div className={style.userLink}>
        <NavLink
          to={PATH.LOGIN}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          Login
        </NavLink>
      </div>
      <div className={style.userLink}>
        <NavLink
          to={PATH.REGISTRATION}
          className={({ isActive }) => cn(style.item, { [style.active]: isActive })}
        >
          Registration
        </NavLink>
      </div>
    </div>
  </div>
);
