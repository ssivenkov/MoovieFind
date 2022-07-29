import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slyder.scss';
import Slider from 'react-slick';
import { ComponentType } from 'types/common/componentType';

import { SliderPropsTypes } from './types';

export const SliderContainer = (props: SliderPropsTypes): ComponentType => {
  const { children } = props;

  return (
    <Slider
      infinite={false}
      slidesToScroll={8}
      slidesToShow={8}
      speed={500}
      swipe={false}
      waitForAnimate={false}
    >
      {children}
    </Slider>
  );
};
