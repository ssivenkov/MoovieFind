import { collectionImage, image1280 } from 'api/config';
import { SOURCE_SANS_PRO } from 'enum/fontFamilies';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledMoviePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`;

type StyledMovieSectionContainerPropsType = {
  background: string;
};

const movieBackground = (background: string) =>
  `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100% ), url(${image1280}${background})`;

export const StyledMovieSectionContainer = styled.div<StyledMovieSectionContainerPropsType>`
  display: flex;
  padding: 25px 0;
  margin-bottom: 25px;
  background-image: ${(props) =>
    props.background ? movieBackground(props.background) : ''};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledPosterContainer = styled.div`
  margin-right: 40px;
`;

export const StyledExternalLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledMovieInfoContainer = styled.div``;

export const StyledInfoContainer = styled.div`
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const StyledMovieTitleStyles = css`
  font-family: ${SOURCE_SANS_PRO.BOLD};
  font-size: 35.2px;
`;

export const StyledMovieTitle = styled.div`
  ${StyledMovieTitleStyles};
  margin-bottom: 30px;
`;

export const StyledDescriptionContainer = styled.div`
  margin-bottom: 30px;
`;

export const StyledOverviewTitle = styled.div`
  font-family: ${SOURCE_SANS_PRO.SEMI_BOLD};
  font-size: 21px;
  margin-bottom: 9px;
`;

export const StyledTagline = styled.span`
  display: block;
  font-family: ${SOURCE_SANS_PRO.REGULAR_ITALIC};
  font-size: 17.6px;
  opacity: 0.75;
  margin-bottom: 20px;
`;

export const StyledCastSectionContainer = styled.div`
  margin-bottom: 25px;
`;

export const StyledSectionTitle = styled.span`
  display: block;
  font-family: ${SOURCE_SANS_PRO.SEMI_BOLD};
  font-size: 22.4px;
  margin-bottom: 20px;
`;

export const StyledCastContentWrapper = styled.div`
  margin-bottom: 20px;
`;

export const StyledCastContentContainer = styled.div`
  max-width: var(--content-width);
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 35px;
`;

export const StyledCastLink = styled(Link)`
  font-size: 17.6px;
`;

type StyledCollectionSectionContainerPropsType = {
  background: string;
};

const collectionBackground = (background: string) =>
  `linear-gradient(to bottom, rgba(0,0,0,0.77) 0%, rgba(0,0,0,0.77) 100% ), url(${collectionImage}${background})`;

export const StyledCollectionSectionContainer = styled.div<StyledCollectionSectionContainerPropsType>`
  height: 258px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-bottom: 25px;
  background-image: ${(props) =>
    props.background ? collectionBackground(props.background) : ''};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 10px;
`;

export const StyledCollectionTitle = styled.span`
  display: block;
  font-family: ${SOURCE_SANS_PRO.SEMI_BOLD};
  font-size: 30.4px;
`;

export const StyledCollectionText = styled.span`
  display: block;
  font-size: 17.6px;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 20px;
`;
