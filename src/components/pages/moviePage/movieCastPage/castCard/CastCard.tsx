import React from 'react';

import { castPersonPhotoSmall } from 'api/config';
import { FaUser } from 'react-icons/fa';

import {
  StyledContainer,
  StyledEmptyPhoto,
  StyledName,
  StyledPhoto,
  StyledPhotoContainer,
  StyledSecondString,
  StyledTextContainer,
} from './styles';
import { CastCardPropsType } from './types';

export const CastCard = (props: CastCardPropsType) => {
  const { name, photoPath, secondString } = props;

  return (
    <StyledContainer>
      <StyledPhotoContainer>
        {photoPath ? (
          <StyledPhoto alt={name} src={`${castPersonPhotoSmall}${photoPath}`} />
        ) : (
          <StyledEmptyPhoto>
            <FaUser />
          </StyledEmptyPhoto>
        )}
      </StyledPhotoContainer>
      <StyledTextContainer>
        {name && <StyledName>{name}</StyledName>}
        {secondString && <StyledSecondString>{secondString}</StyledSecondString>}
      </StyledTextContainer>
    </StyledContainer>
  );
};
