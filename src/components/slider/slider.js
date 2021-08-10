import React from 'react';
import './slider.sass';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './slide';


const SiteSlider = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '200px',
    responsive: [
      {
        breakpoint: 718,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
    prevArrow: <img src='/img/prev.png' alt='prev'/>,
    nextArrow: <img src='/img/next.png' alt='next'/>
  }
  return (
    <div className="SiteSlider">
        <div className="slides">
          <Slider {...settings}>
            <Slide imgUrl='/img/slide1.png'/>
            <Slide imgUrl='/img/slide2.png'/>
            <Slide imgUrl='/img/slide3.png'/>
            <Slide imgUrl='/img/slide2.png'/>
          </Slider>
        </div>
    </div>
  )
}

export default SiteSlider;