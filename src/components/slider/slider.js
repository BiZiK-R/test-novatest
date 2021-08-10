import React from 'react';
import './slider.sass';
import Slide from './slide';


const Slider = () => {
  return (
    <div className="Slider">
        <div className="arrow">
            <img src='/img/prev.png' alt='prev'/>
        </div>
        <div className="slides">
            <Slide imgUrl='/img/slide1.png'/>
            <Slide imgUrl='/img/slide2.png'/>
            <Slide imgUrl='/img/slide3.png'/>
        </div>
        <div className="arrow">
            <img src='/img/next.png' alt='next'/>
        </div>
    </div>
  )
}

export default Slider;