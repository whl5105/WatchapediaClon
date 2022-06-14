

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import ReactSlider,{Settings} from "react-slick";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

interface Props{
  children?:
    | React.ReactChild
    | React.ReactChild[];  
  settings?: Settings;
}
const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ pos }) => pos === 'left' ? css`left: 0; transform: translate(-50%, -50%)` : css`right: 0; transform: translate(50%, -50%)`};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;


const DEFAULT_SETTINGS: Settings = {
  dots:false, // 하단 indicator
  arrows: true, // 좌우 화살표 표시 여부
  infinite: false, // 마지막 슬라이더 다음 버튼이 처음으로 되돌아가는가 
  speed: 500,
  slidesToShow: 5,  //슬라이드 당 표시될 수
  slidesToScroll: 5, // 스크롤 시 표시되는 수
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos />
    </ArrowButton>
  )  
};

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
  <ReactSlider {...settings}>
    {children}
  </ReactSlider>
)



export default Slider;



