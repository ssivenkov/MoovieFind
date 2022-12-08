import React from 'react';

import { Button } from 'components/common/button/Button';
import {
  StyledField,
  StyledFormColumn,
  StyledSectionContainer,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles';
import { Formik } from 'formik';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import { ComponentType } from 'types/common/componentType';

import { StyledButtonsContainer } from './styles';
import { SignInSubmitType } from './types';

export const LoginPage = observer((): ComponentType => {
  const { appStore } = useStore();
  const initialValues = {
    login: '',
    password: '',
  };

  const onSubmit = (submitData: SignInSubmitType): void => {
    appStore.setModalText(submitData.login);
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
});
