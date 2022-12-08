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
import { SignUpSubmitType } from './types';

export const SignUpPage = observer((): ComponentType => {
  const { appStore } = useStore();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (submitData: SignUpSubmitType): void => {
    appStore.setModalText(submitData.email);
  };

  return (
    <StyledSectionContainer>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>Sign up</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledFormColumn>
          <StyledField name='name' placeholder='Name' type='text' />
          <StyledField name='email' placeholder='Email' type='text' />
          <StyledField name='password' placeholder='Password' type='password' />
          <StyledField
            name='confirmPassword'
            placeholder='Confirm password'
            type='password'
          />
          <StyledButtonsContainer>
            <Button type='submit'>Sign up</Button>
          </StyledButtonsContainer>
        </StyledFormColumn>
      </Formik>
    </StyledSectionContainer>
  );
});
