import React, { FC } from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMainSectionContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const StyledMainSectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #777;
`;

const StyledMainSectionH2 = styled.h2``;
const StyledMainSectionFiltersContainer = styled.div`
  display: flex;
  margin-left: 50px;
  padding: 5px;
  border: 1px solid red;
  border-radius: 7px;
`;
const StyledMainSectionFilterContainer = styled.div`
  margin: 0 6px;
`;
const StyledMainSectionFilter = styled.h3``;

const StyledMainSectionContentContainer = styled.div`
  width: 100%;
  background-color: #555;
`;

type MainSectionPropsType = {
  title: string;
  filters: Array<string>;
};

export const MainSection: FC<MainSectionPropsType> = ({
  title,
  filters,
}): ReturnComponentType => (
  <StyledMainSectionContainer>
    <StyledMainSectionHeader>
      <StyledMainSectionH2>{title}</StyledMainSectionH2>
      <StyledMainSectionFiltersContainer>
        {filters.map(filter => (
          <StyledMainSectionFilterContainer key={title + filter}>
            <StyledMainSectionFilter>{filter}</StyledMainSectionFilter>
          </StyledMainSectionFilterContainer>
        ))}
      </StyledMainSectionFiltersContainer>
    </StyledMainSectionHeader>
    <StyledMainSectionContentContainer>Content</StyledMainSectionContentContainer>
  </StyledMainSectionContainer>
);
