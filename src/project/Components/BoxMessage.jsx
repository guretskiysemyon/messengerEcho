import React from 'react';
import './BoxMessage.css'

const BoxMessage = ({date,body, time,side}) => {
    
    var style= ["box-message"]
    
    if (side === 'right')
         style.push('right')
    else
         style.push('left')
    
    const cl = style.join(' ')
    
    return (
        <div className={cl}>
            <div>{body}</div>
            <div id="time">{date}/{time}</div>
        </div>
    );
};

export default BoxMessage;