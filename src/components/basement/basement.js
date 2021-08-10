import React from 'react';
import './basement.sass';

const Basement = () => {
  return (
    <div className="Basement">
        <div className="advertising">
            <p>Реклама</p>
            <p>Условия использования</p>
            <p>© 2003–2016 Spike</p>
        </div>
        <img className="background-basement" src="/img/background_basement.png" alt="mask"/>
    </div>
  )
}

export default Basement;