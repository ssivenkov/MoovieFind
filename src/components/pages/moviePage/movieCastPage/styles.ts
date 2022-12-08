import { SOURCE_SANS_PRO } from 'enum/fontFamilies';
import styled from 'styled-components';

import { StyledMovieTitleStyles } from '../styles';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledCastContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledMovieWrapper = styled.div`
  margin-bottom: 30px;
`;

export const StyledMovieContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
`;

export const StyledMovieTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 25px;
`;

export const StyledPoster = styled.img`
  width: 58px;
  height: 87px;
  border-radius: 5px;
`;

export const StyledMovieTitle = styled.span`
  ${StyledMovieTitleStyles}
`;

export const StyledGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledGroupTitleContainer = styled.div`
  white-space: nowrap;
  margin-bottom: 14px;
`;

export const StyledGroupTitle = styled.span`
  font-size: 22.4px;
  margin-right: 7px;
`;

export const StyledGroupCastCount = styled.span`
  font-family: ${SOURCE_SANS_PRO.LIGHT};
  font-size: 22.4px;
  opacity: 0.6;
`;

export const StyledGroupCastContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCrewCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const StyledCategory = styled.span`
  font-family: ${SOURCE_SANS_PRO.SEMI_BOLD};
  margin-bottom: 3px;
`;
