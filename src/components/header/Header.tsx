import React, { useLayoutEffect, useState } from 'react';

import logo from 'assets/images/logo.svg';
import { Dropdown } from 'components/common/dropdown/Dropdown';
import { Link } from 'react-router-dom';
import { PATH } from 'routes/routes';
import { ComponentType } from 'types/common/componentType';

import {
  StyledAppLogo,
  StyledAppLogoContainer,
  StyledAuthContainer,
  StyledCategoriesContainer,
  StyledContainer,
  StyledHeaderContainer,
  StyledHeaderLink,
} from './styles';
import { WarningStrip } from './warningStrip/WarningStrip';

export const Header = (): ComponentType => {
  const dontShowWarningStrip = 'dontShowWarningStrip';

  const warningStripLocalStorage = localStorage.getItem(dontShowWarningStrip);
  const warningStripSessionStorage = sessionStorage.getItem(dontShowWarningStrip);

  const [warningStripWasChanged, setWarningStripWasChanged] = useState<boolean>(false);

  const warningStripCondition =
    warningStripLocalStorage !== 'true' && warningStripSessionStorage !== 'true';

  const onOkCLickHandler = () => {
    sessionStorage.setItem(dontShowWarningStrip, 'true');
    setWarningStripWasChanged(true);
  };

  const onDontShowAgainCLickHandler = () => {
    localStorage.setItem(dontShowWarningStrip, 'true');
    setWarningStripWasChanged(true);
  };

  useLayoutEffect(() => {
    if (warningStripWasChanged) {
      setWarningStripWasChanged(false);
    }
  }, [warningStripWasChanged]);

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledCategoriesContainer>
          <StyledAppLogoContainer>
            <Link to={PATH.MAIN_PAGE}>
              <StyledAppLogo src={logo} />
            </Link>
          </StyledAppLogoContainer>
          <Dropdown title='Movies'>
            {[
              ['Popular', `${PATH.MOVIES}/${PATH.POPULAR}`],
              ['Trending', `${PATH.MOVIES}/${PATH.TRENDING}`],
            ]}
          </Dropdown>
          <Dropdown title='TV Shows'>
            {[
              ['Popular', `${PATH.TV_SHOWS}/${PATH.POPULAR}`],
              ['Trending', `${PATH.TV_SHOWS}/${PATH.TRENDING}`],
            ]}
          </Dropdown>
          <StyledHeaderLink to={PATH.PEOPLE}>People</StyledHeaderLink>
          <StyledHeaderLink to={PATH.SEARCH}>Search</StyledHeaderLink>
        </StyledCategoriesContainer>
        <StyledAuthContainer>
          <StyledHeaderLink to={PATH.LOGIN}>Login</StyledHeaderLink>
          <StyledHeaderLink to={PATH.SIGNUP}>Sign up</StyledHeaderLink>
        </StyledAuthContainer>
      </StyledHeaderContainer>
      {warningStripCondition && (
        <WarningStrip
          dontShowAgainCallback={onDontShowAgainCLickHandler}
          okCallback={onOkCLickHandler}
        />
      )}
    </StyledContainer>
  );
};
