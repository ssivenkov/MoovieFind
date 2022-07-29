import React from 'react';

import { Button } from 'components/common/button/Button';
import {
  StyledField,
  StyledFormColumn,
  StyledSectionContainer,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles/Styles';
import { Formik } from 'formik';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

import { SignInSubmitType } from './types';

const StyledButtonsContainer = styled.div`
  margin-top: 20px;
`;

export const LoginPage = (): ComponentType => {
  const initialValues = {
    login: '',
    password: '',
  };

  const onSubmit = (submitData: SignInSubmitType): void => {
    setModalTextAction({ modalText: submitData.login });
  };

  return (
    <StyledSectionContainer>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>Login</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledFormColumn>
          <StyledField name='login' placeholder='Login' type='text' />
          <StyledField name='password' placeholder='Password' type='password' />
          <StyledButtonsContainer>
            <Button type='submit'>Login</Button>
          </StyledButtonsContainer>
        </StyledFormColumn>
      </Formik>
    </StyledSectionContainer>
  );
};
