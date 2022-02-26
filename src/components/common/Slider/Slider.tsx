import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slyder.scss';
import { ReturnComponentType } from 'types/commonTypes/ReturnComponentType';
import { SliderTypes } from 'types/components/commonTypes/SliderTypes/SliderTypes';

export const SliderContainer = ({ children }: SliderTypes): ReturnComponentType => (
  <Slider
    slidesToShow={8}
    slidesToScroll={8}
    infinite={false}
    speed={500}
    swipe={false}
    waitForAnimate={false}
  >
    {children}
  </Slider>
);
