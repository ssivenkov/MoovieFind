import React from 'react';

import { Button } from 'components/common/button/Button';
import { StyledFormRow, StyledSearchField } from 'components/pages/commonStyles/Styles';
import { Formik } from 'formik';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

import { SearchSubmitType } from './types';

const StyledSearchContainer = styled.div`
  width: 100%;
  margin-right: 15px;
`;

export const SearchSection = (): ComponentType => {
  const initialValues = {
    search: '',
  };

  const onSubmit = (submitData: SearchSubmitType): void => {
    setModalTextAction({ modalText: submitData.search });
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
};
