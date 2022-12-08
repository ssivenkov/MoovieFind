import { originalImage } from 'api/config';
import styled from 'styled-components';

type StyledIntroWrapperPropsType = {
  imageLink: string;
};

export const StyledMainContainer = styled.div`
  width: 100%;
`;

export const StyledIntroWrapper = styled.div<StyledIntroWrapperPropsType>`
  height: calc(100vh / 2.5);
  min-height: 300px;
  max-height: 360px;
  display: flex;
  align-items: center;
  background-color: #555;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    ${(props) => props.imageLink.length > 0 && `url(${originalImage}${props.imageLink})`};
  background-size: cover;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
`;

export const StyledIntroContainer = styled.div`
  width: 100%;
  padding: 30px 40px;
`;

export const StyledWelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledH2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;
`;

export const StyledH3 = styled.h3`
  font-size: 32px;
  font-weight: 600;
`;

export const StyledSearchContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
`;

export const StyledSectionsContainer = styled.div``;
