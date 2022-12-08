import { MEDIUM_SCREEN, SMALL_SCREEN, WIDE_SCREEN } from 'constants/common';

import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slyder.scss';
import { useSizes } from 'hooks/useSizes';
import Slider from 'react-slick';
import { ComponentType } from 'types/common/componentType';

import { SliderPropsTypes } from './types';

export const SliderContainer = (props: SliderPropsTypes): ComponentType => {
  const { children } = props;

  const sizes = useSizes();

  const wideScreenSlidesCount = 8;
  const mediumScreenSlidesCount = 6;
  const smallScreenSlidesCount = 5;
  const defaultSlidesCount = 4;

  const slidesCount = (): number => {
    if (sizes.width >= WIDE_SCREEN) {
      return wideScreenSlidesCount;
    }

    if (sizes.width >= MEDIUM_SCREEN) {
      return mediumScreenSlidesCount;
    }

    if (sizes.width >= SMALL_SCREEN) {
      return smallScreenSlidesCount;
    }

    return defaultSlidesCount;
  };

  return (
    <Slider
      infinite={false}
      slidesToScroll={slidesCount()}
      slidesToShow={slidesCount()}
      speed={500}
      swipe={false}
      waitForAnimate={false}
    >
      {children}
    </Slider>
  );
};
