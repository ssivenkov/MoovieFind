import React from 'react';

import styled from 'styled-components';

import { MainSection } from 'components/Main/MainSection/MainSection';
import { ReturnComponentType } from 'types/ReturnComponentType';

const StyledMainContainer = styled.div`
  width: 100%;
`;
const StyledIntroWrapper = styled.div`
  height: calc(100vh / 2.5);
  min-height: 300px;
  max-height: 360px;
  display: flex;
  align-items: center;
  background-color: #ccc;
`;
const StyledIntroContainer = styled.div`
  width: 100%;
  padding: 30px 40px;
  background-color: #555;
`;
const StyledWelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledH2 = styled.h2``;
const StyledH3 = styled.h3``;
const StyledSearchContainer = styled.div`
  margin-top: 25px;
`;
const StyledSectionsContainer = styled.div`
  // background-color: #999;
`;

export const Main = (): ReturnComponentType => (
  <StyledMainContainer>
    <StyledIntroWrapper>
      <StyledIntroContainer>
        <StyledWelcomeContainer>
          <StyledH2>Welcome</StyledH2>
          <StyledH3>
            Millions of movies, TV shows and people to discover. Explore now
          </StyledH3>
        </StyledWelcomeContainer>
        <StyledSearchContainer>Search</StyledSearchContainer>
      </StyledIntroContainer>
    </StyledIntroWrapper>
    <StyledSectionsContainer>
      <MainSection
        title="What's popular"
        filters={['Streaming', 'On TV', 'For Rent', 'In Theaters']}
      />
      <MainSection title="Free to watch" filters={['Movies', 'TV']} />
      <MainSection
        title="Latest trailers"
        filters={['Streaming', 'On TV', 'For Rent', 'In Theaters']}
      />
      <MainSection title="Trending" filters={['Today', 'This Weak']} />
    </StyledSectionsContainer>
  </StyledMainContainer>
);
