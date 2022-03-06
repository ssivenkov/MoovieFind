import styled from 'styled-components';

export const StyledSection = styled.div`
  width: var(--content-width);
`;

export const StyledSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    & {
      justify-content: center;
    }
  }
`;

export const StyledSectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledSectionTitle = styled.div`
  margin: 20px 0 25px 0;
  font-size: 40px;
  font-weight: 500;
  padding: 0 10px 8px 10px;
  border-bottom: 5px solid var(--primary);
`;
