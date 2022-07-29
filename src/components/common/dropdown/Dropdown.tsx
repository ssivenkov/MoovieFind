import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ComponentType } from 'types/common/componentType';

import { DropdownListItemType, DropdownPropsType } from './types';

const DropdownCommonBorderRadius = '10px';

const StyledDropdownItemsContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 44px;
  left: 0;
  background-color: var(--white);
  border-radius: ${DropdownCommonBorderRadius};
`;

const StyledDropdownTitleContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-weight: 500;
  line-height: 1.08;
  text-align: center;
  color: var(--white);
  border-radius: 7px;
`;

const StyledDropdownContainer = styled.div`
  height: 100%;
  position: relative;
  &:hover {
    cursor: pointer;
    ${StyledDropdownItemsContainer} {
      visibility: visible;
    }
  }
`;

const StyledDropdownItem = styled(Link)`
  padding: 14px 23px;
  font-size: 15px;
  white-space: nowrap;
  text-align: start;
  color: var(--black);
  &:hover {
    color: var(--white);
    background-color: var(--primary);
  }
  &:first-child {
    border-top-left-radius: ${DropdownCommonBorderRadius};
    border-top-right-radius: ${DropdownCommonBorderRadius};
  }
  &:last-child {
    border-bottom-left-radius: ${DropdownCommonBorderRadius};
    border-bottom-right-radius: ${DropdownCommonBorderRadius};
  }
`;

export const Dropdown = (props: DropdownPropsType): ComponentType => {
  const { title, children } = props;

  return (
    <StyledDropdownContainer>
      <StyledDropdownTitleContainer>{title}</StyledDropdownTitleContainer>
      <StyledDropdownItemsContainer>
        {children.map((listItem: DropdownListItemType) => (
          <StyledDropdownItem key={listItem[1]} to={listItem[1]}>
            {listItem[0]}
          </StyledDropdownItem>
        ))}
      </StyledDropdownItemsContainer>
    </StyledDropdownContainer>
  );
};
