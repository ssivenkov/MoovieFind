import {
  cardContainerStyles,
  contentContainerStyles,
  infoContainerStyles,
  lightHoverStyles,
  noContentStyles,
  textStyles,
  titleStyles,
  transitionTime,
} from 'components/common/card/commonStyles';
import styled from 'styled-components';

type StyledPosterContentContainerPropsType = {
  nullContent: boolean;
};

type StyledHumanRatePropsType = {
  popularity: number;
};

export const StyledContainer = styled.div`
  ${cardContainerStyles}
`;

export const StyledInfoContainer = styled.div`
  ${infoContainerStyles}
`;

export const StyledRate = styled.div<StyledHumanRatePropsType>`
  ${textStyles};
  opacity: 0;
  transform: ${(props) =>
    props.popularity === 0 ? 'translate(-50%, 135%)' : 'translate(-50%, 60%)'};
  font-size: ${(props) => (props.popularity === 0 ? '22px' : '35px')};
`;

export const StyledContainerContainer = styled.div`
  cursor: pointer;
  transition: ${transitionTime}s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
  }
`;

export const StyledPosterLightContainer = styled.div<StyledPosterContentContainerPropsType>`
  ${contentContainerStyles}
  ${(props) => props.nullContent && lightHoverStyles}
`;

export const StyledPoster = styled.img`
  ${noContentStyles}
`;

export const StyledEmptyPoster = styled.div`
  ${noContentStyles}
`;

export const StyledEmptyPosterTitle = styled.span`
  ${textStyles};
  transform: translate(-50%, -65%);
  font-size: 22px;
  font-weight: 500;
`;

export const StyledName = styled.div`
  ${titleStyles}
`;
