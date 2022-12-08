import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMainSectionContainer = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export const StyledMainSectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledMainSectionLinkTitle = styled(Link)`
  font-size: 28px;
  color: var(--textLight);
`;

export const StyledMainSectionFiltersWrapper = styled.div`
  display: flex;
  margin-left: 45px;
`;

export const StyledMainSectionFiltersContainer = styled.div`
  display: flex;
  margin-left: 20px;
  border: 1px solid var(--primary);
  border-radius: 7px;
  &:first-child {
    margin-left: 0;
  }
`;

export const StyledMainSectionContentContainer = styled.div`
  width: 100%;
`;
