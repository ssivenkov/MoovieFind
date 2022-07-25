import React from 'react';

import { Formik } from 'formik';
import styled from 'styled-components';

import { Button } from 'components/common/button/Button';
import {
  StyledField,
  StyledFormColumn,
  StyledSectionContainer,
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from 'components/pages/commonStyles/Styles';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

interface submitObjectType {
  login: string;
  password: string;
}

const StyledButtonsContainer = styled.div`
  margin-top: 20px;
`;

export const LoginPage = (): ReturnComponentType => {
  const initialValues = {
    login: '',
    password: '',
  };

  const onSubmit = (values: submitObjectType): void => {
    console.log(values);
  };

  return (
    <StyledSectionContainer>
      <StyledSectionTitleContainer>
        <StyledSectionTitle>Login</StyledSectionTitle>
      </StyledSectionTitleContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledFormColumn>
          <StyledField type="text" name="login" placeholder="Login" />
          <StyledField type="password" name="password" placeholder="Password" />
          <StyledButtonsContainer>
            <Button type="submit">Login</Button>
          </StyledButtonsContainer>
        </StyledFormColumn>
      </Formik>
    </StyledSectionContainer>
  );
};
