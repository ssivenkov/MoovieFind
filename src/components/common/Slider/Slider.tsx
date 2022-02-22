import React from 'react';

import Slider from 'react-slick';

import { ReturnComponentType } from 'types/common/ReturnComponentType';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slyder.scss';

export const SliderContainer = ({ children }: any): ReturnComponentType => (
  <Slider slidesToShow={8} slidesToScroll={8} infinite={false} speed={500} swipe={false}>
    {children}
  </Slider>
);
