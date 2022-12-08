import React, { useEffect } from 'react';

import {
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { ComponentType } from 'types/common/componentType';

export const SearchPage = observer((): ComponentType => {
  const { appStore } = useStore();

  useEffect(() => {
    appStore.setAppInitialized(true);
  }, []);

  return (
    <StyledSectionTitleContainer>
      <StyledSectionTitle>Search</StyledSectionTitle>
    </StyledSectionTitleContainer>
  );
});
