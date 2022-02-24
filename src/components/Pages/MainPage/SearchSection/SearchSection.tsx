import React from 'react';

import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

import { Button } from 'components/common/Button/Button';
import style from 'components/Pages/MainPage/SearchSection/SearchSection.module.scss';
import { ReturnComponentType } from 'types/common/ReturnComponentType';

const StyledSearchContainer = styled.div`
  width: 100%;
  margin-right: 15px;
`;

interface onSubmitType {
  search: string;
}

export const SearchSection = (): ReturnComponentType => {
  const initialValues = {
    search: '',
  };

  const onSubmit = (onSubmitObject: onSubmitType): void => {
    console.log(onSubmitObject.search);
  };

  return (
    <StyledSearchContainer>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={style.searchContainer}>
          <Field
            type="text"
            name="search"
            placeholder="Search for a movie / TV show / person"
            className={style.searchInput}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
    </StyledSearchContainer>
  );
};
