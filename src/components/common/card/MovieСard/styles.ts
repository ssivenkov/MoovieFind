import {
  cardContainerStyles,
  contentContainerStyles,
  darkHoverStyles,
  infoContainerStyles,
  noContentStyles,
  posterStyles,
  sizeStyles,
  textStyles,
  titleStyles,
  transitionTime,
} from 'components/common/card/commonStyles';
import styled from 'styled-components';

type StyledMovieRatePropsType = {
  voteAverage: number;
};

export const StyledMovie = styled.div`
  ${cardContainerStyles}
`;

export const StyledInfoContainer = styled.div`
  ${infoContainerStyles}
`;

export const StyledRate = styled.div<StyledMovieRatePropsType>`
  ${textStyles};
  opacity: 0;
  transform: ${(props) =>
    props.voteAverage === 0 ? 'translate(-50%, 135%)' : 'translate(-50%, 60%)'};
  font-size: ${(props) => (props.voteAverage === 0 ? '22px' : '35px')};
`;

export const StyledReleaseDate = styled.div`
  ${textStyles};
  opacity: 0;
  transform: translate(-50%, 760%);
  font-size: 14px;
`;

export const StyledMovieContainer = styled.div`
  ${sizeStyles};
  cursor: pointer;
  transition: ${transitionTime}s ease-out;
  &:hover {
    transform: scale(1.065) translate(0, -9px) translate(0, 1px);
    ${StyledRate}, ${StyledReleaseDate} {
      opacity: 1;
    }
  }
`;

export const StyledPosterDarkContainer = styled.div`
  ${contentContainerStyles}
  ${darkHoverStyles}
`;

export const StyledPoster = styled.img`
  ${posterStyles};
`;

export const StyledEmptyPoster = styled.div`
  ${noContentStyles}
`;

export const StyledMovieTitle = styled.div`
  ${titleStyles}
`;
