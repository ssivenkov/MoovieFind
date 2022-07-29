import React from 'react';

import { Button } from 'components/common/button/Button';
import {
  StyledField,
  StyledFormColumn,
  StyledSectionTitle,
  StyledSectionTitleContainer,
  StyledSectionContainer,
} from 'components/pages/commonStyles/Styles';
import { Formik } from 'formik';
import { setModalTextAction } from 'store/actions/appReducerActions/setModalTextAction';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

import { SignUpSubmitType } from './types';

const StyledButtonsContainer = styled.div`
  margin-top: 20px;
`;

export const SignUpPage = (): ComponentType => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (submitData: SignUpSubmitType): void => {
    setModalTextAction({ modalText: submitData.email });
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
};
