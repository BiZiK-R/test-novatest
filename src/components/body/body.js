import React from 'react';
import './body.sass';

const Body = () => {
  return (
    <div className="Body">
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
        <div className="reviews">
            <h3>Рецензии:</h3>
            <div className="positive">
                <p>266</p>
                <p>положительных</p>
            </div>
            <div className="neutral">
                <p>41</p>
                <p>нейтральных</p>
            </div>
            <div className="negative">
                <p>66</p>
                <p>негативных</p>
            </div>
        </div>
        <div className="trailer">
            <img src='/img/play.png' alt="player"/>
        </div>
        <div className="slider">
            <div className="arrow">
                <img src='/img/prev.png' alt='prev'/>
            </div>
            <div className="slides">
                <img src='/img/slide1.png' alt='slide1'/>
                <img src='/img/slide2.png' alt='slide2'/>
                <img src='/img/slide3.png' alt='slide3'/>
            </div>
            <div className="arrow">
                <img src='/img/next.png' alt='next'/>
            </div>
        </div>
    </div>
  )
}

export default Body;