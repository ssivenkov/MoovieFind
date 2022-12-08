import styled, { css } from 'styled-components';

const posterStyle = css`
  width: 270px;
  height: 400px;
  border-radius: 10px;
`;

export const StyledPoster = styled.img`
  ${posterStyle};
`;

export const StyledEmptyPosterContainer = styled.div`
  ${posterStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary_medium);
`;

export const StyledEmptyPosterText = styled.div`
  opacity: 0.6;
  color: var(--textLight);
  font-size: 20px;
  font-weight: 500;
`;
