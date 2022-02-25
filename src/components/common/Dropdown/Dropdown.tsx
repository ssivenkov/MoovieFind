import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ONE, ZERO } from 'constants/common';
import { ReturnComponentType } from 'types/common/ReturnComponentType';
import { DropdownPropsType } from 'types/components/common/DropdownTypes/DropdownTypes';

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

export const Dropdown: FC<DropdownPropsType> = ({
  title,
  children,
}): ReturnComponentType => (
  <StyledDropdownContainer>
    <StyledDropdownTitleContainer>{title}</StyledDropdownTitleContainer>
    <StyledDropdownItemsContainer>
      {children.map((listItem: any) => (
        <StyledDropdownItem key={listItem} to={listItem[ONE]}>
          {listItem[ZERO]}
        </StyledDropdownItem>
      ))}
    </StyledDropdownItemsContainer>
  </StyledDropdownContainer>
);
