import { Link } from 'react-router-dom';
import styled from 'styled-components';

const borderRadius = '10px';

export const StyledItemsContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 44px;
  left: 0;
  background-color: var(--textLight);
  border-radius: ${borderRadius};
`;

export const StyledContainer = styled.div`
  z-index: 50;
  height: 100%;
  position: relative;
  &:hover {
    cursor: pointer;
    ${StyledItemsContainer} {
      visibility: visible;
    }
  }
`;

export const StyledTitleContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-weight: 500;
  line-height: 1.08;
  text-align: center;
  color: var(--textLight);
  border-radius: 7px;
`;

export const StyledItem = styled(Link)`
  padding: 14px 23px;
  font-size: 15px;
  white-space: nowrap;
  text-align: start;
  color: var(--textDark);
  &:hover {
    color: var(--textLight);
    background-color: var(--primary);
  }
  &:first-child {
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
  }
  &:last-child {
    border-bottom-left-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
  }
`;
