import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-top: 1px solid #505050;
`;

export const StyledContactsContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
`;

export const StyledTmdbContainer = styled.div`
  margin: 10px 0 20px 0;
`;

export const StyledTmdbLogo = styled.img`
  display: block;
  margin-top: 10px;
  user-select: none;
  &:hover {
    filter: drop-shadow(0 0 10px rgba(0, 100, 255, 1));
  }
`;
