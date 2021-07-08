import React from 'react';
import './button.css';

let timeOut;
let prevHTML;

function clickHappened(e) {

    console.log(prevHTML)
    
    const goodHTML = "Goodbye";
    
    if (e.target.innerHTML !== goodHTML) {
        prevHTML = e.target.innerHTML;
        e.target.innerHTML = goodHTML;
        timeOut = setTimeout(()=>e.target.innerHTML = prevHTML, 3000);
    } else {
        clearTimeout(timeOut);
        e.target.innerHTML = prevHTML;
    }

}

function Button(props) {

  
    return (
        <button onClick={clickHappened}>{props.text}</button>
    );
}

export default Button