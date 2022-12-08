import React from 'react';

import {
  StyledButton,
  StyledButtonsContainer,
  StyledContainer,
  StyledText,
} from './styles';
import { WarningStripPropsType } from './types';

export const WarningStrip = (props: WarningStripPropsType) => {
  const { okCallback, dontShowAgainCallback } = props;

  return (
    <StyledContainer>
      <StyledText>If content is not downloading, please turn on your VPN</StyledText>
      <StyledButtonsContainer>
        <StyledButton onClick={okCallback}>Ok</StyledButton>
        <StyledButton onClick={dontShowAgainCallback}>Don&apos;t show again</StyledButton>
      </StyledButtonsContainer>
    </StyledContainer>
  );
};
