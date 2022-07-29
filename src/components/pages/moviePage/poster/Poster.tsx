import React from 'react';

import { image300x450 } from 'api/config';
import { ComponentType } from 'types/common/componentType';

import { StyledPoster } from '../style';

import { PosterPropsType } from './types';

export const Poster = (props: PosterPropsType): ComponentType => {
  const { posterLink } = props;

  return posterLink ? <StyledPoster src={`${image300x450}${posterLink}`} /> : null;
};
