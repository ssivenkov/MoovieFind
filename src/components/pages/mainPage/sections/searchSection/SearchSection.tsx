import React from 'react';

import { Button } from 'components/common/button/Button';
import { StyledFormRow, StyledSearchField } from 'components/pages/commonStyles';
import { Formik } from 'formik';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { ComponentType } from 'types/common/componentType';

import { StyledSearchContainer } from './styles';
import { SearchSubmitType } from './types';

export const SearchSection = observer((): ComponentType => {
  const { appStore } = useStore();

  const initialValues = {
    search: '',
  };

  const onSubmit = (submitData: SearchSubmitType): void => {
    appStore.setModalText(submitData.search);
  };

  return (
    <StyledSearchContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledFormRow>
          <StyledSearchField
            name='search'
            placeholder='Search for a movie, TV show or person'
            type='text'
          />
          <Button type='submit'>Search</Button>
        </StyledFormRow>
      </Formik>
    </StyledSearchContainer>
  );
});
