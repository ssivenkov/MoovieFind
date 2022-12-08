import React from 'react';

import { ComponentType } from 'types/common/componentType';

import {
  StyledContainer,
  StyledItem,
  StyledItemsContainer,
  StyledTitleContainer,
} from './styles';
import { DropdownListItemType, DropdownPropsType } from './types';

export const Dropdown = (props: DropdownPropsType): ComponentType => {
  const { title, children } = props;

  return (
    <StyledContainer>
      <StyledTitleContainer>{title}</StyledTitleContainer>
      <StyledItemsContainer>
        {children.map((listItem: DropdownListItemType) => (
          <StyledItem key={listItem[1]} to={listItem[1]}>
            {listItem[0]}
          </StyledItem>
        ))}
      </StyledItemsContainer>
    </StyledContainer>
  );
};
