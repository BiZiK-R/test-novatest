import React from 'react';
import './reviews.sass';
import Review from './review';
import countInPrecent from './countInPrecent';

const Reviews = ({countPositive, countNeutral, countNegative, precPositive, precNeutral, precNegative}) => {
    return (
    <div className="Reviews">
        <h3>Рецензии:</h3>
        <Review count={countPositive} review='положительных' color='#b7ffb1' percent={precPositive}/>
        <Review count={countNeutral} review='нейтральных' color='#d7d7d7' percent={precNeutral}/>
        <Review count={countNegative} review='негативных' color='#ffb1b1' percent={precNegative}/>
    </div>
    )
}

export default countInPrecent(Reviews);