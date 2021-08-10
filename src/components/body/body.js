import React from 'react';
import './body.sass';
import Slider from '../slider';
import Reviews from '../reviews';

const Body = () => {
  return (
    <div className="Body">
        <div className="top">
            <div className="description">
                <img src='./img/poster.png' alt="Poster Deadpool"/>
                <p>
                    Уэйд Уилсон — наёмник. Будучи побочным продуктом программы 
                    вооружённых сил под названием «Оружие X», Уилсон приобрёл 
                    невероятную силу, проворство и способность к исцелению. 
                    Но страшной ценой: его клеточная структура постоянно 
                    меняется, а здравомыслие сомнительно. Всё, чего Уилсон 
                    хочет, — это держаться на плаву в социальной выгребной 
                    яме. Но течение в ней слишком быстрое.
                </p>
            </div>
            <Reviews countPositive={266} countNeutral={41} countNegative={66}/>
        </div>
        <div className="trailer">
            <img src='/img/play.png' alt="player"/>
        </div>
        <Slider/>
    </div>
  )
}

export default Body;