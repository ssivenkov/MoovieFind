import React from 'react';

import { Formik } from 'formik';
import styled from 'styled-components';

import { Button } from 'components/common/Button/Button';
import { StyledField, StyledFormRow } from 'components/Pages/commonStyles/Styles';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';

const StyledSearchContainer = styled.div`
  width: 100%;
  margin-right: 15px;
`;

interface submitObjectType {
  search: string;
}

export const SearchSection = (): ReturnComponentType => {
  const initialValues = {
    search: '',
  };

  const onSubmit = (submitObject: submitObjectType): void => {
    console.log(submitObject.search);
  };

  return (
    <StyledSearchContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <StyledFormRow>
          <StyledField
            type="text"
            name="search"
            placeholder="Search for a movie, TV show or person"
            marginRight
          />
          <Button type="submit">Search</Button>
        </StyledFormRow>
      </Formik>
    </StyledSearchContainer>
  );
};
