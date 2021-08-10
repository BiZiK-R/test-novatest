import React from 'react';
import './slide.sass';


const Slide = ({imgUrl}) => {
    const slideStyle = {
        background: `url(${imgUrl})`
    }
    return (
    <div className="Slide" style={slideStyle}>
        <img src={'/img/zoom2.png'} alt='slide1'/>
    </div>
    )
}

export default Slide;