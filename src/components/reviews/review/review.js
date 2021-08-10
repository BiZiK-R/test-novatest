import React from 'react';
import './review.sass';

const Review = ({count, review, color, percent}) => {
    const filing = 100 - percent;
    const backgroundStyle = {
        background: `linear-gradient(to left, #f5f5f5 ${filing}%, ${color} ${filing}%) right`
    }
    return (
    <div style={backgroundStyle} className="Review">
        <p>{count}</p>
        <p>{review}</p>
    </div>
    )
}

export default Review;