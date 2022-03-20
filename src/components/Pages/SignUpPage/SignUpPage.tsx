import React from 'react';

import { Formik } from 'formik';
import styled from 'styled-components';

import { Button } from 'components/common/Button/Button';
import {
  StyledField,
  StyledFormColumn,
  StyledSectionTitle,
  StyledSectionTitleContainer,
  StyledSectionContainer,
} from 'components/Pages/commonStyles/Styles';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

interface submitObjectType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const StyledButtonsContainer = styled.div`
  margin-top: 20px;
`;

export const SignUpPage = (): ReturnComponentType => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values: submitObjectType): void => {
    console.log(values);
  };

  return (
    <StyledSectionContainer>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>Sign up</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledFormColumn>
          <StyledField type="text" name="name" placeholder="Name" />
          <StyledField type="text" name="email" placeholder="Email" />
          <StyledField type="password" name="password" placeholder="Password" />
          <StyledField
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <StyledButtonsContainer>
            <Button type="submit">Sign up</Button>
          </StyledButtonsContainer>
        </StyledFormColumn>
      </Formik>
    </StyledSectionContainer>
  );
};
