import React from "react";
import "./button.css";
import { useState } from "react";

function Button(props) {
  let timeOut;
  let prevHTML;

  function clickHappened(text, f) {
    console.log(prevHTML);
    console.log(text, f);

    const goodHTML = "Goodbye";

    if (text !== goodHTML) {
      prevHTML = text;
      f(goodHTML);
      timeOut = setTimeout(() => f(prevHTML), 3000);
    } else {
      clearTimeout(timeOut);
      f(prevHTML);
    }
  }

  let [text, setText] = useState(props.text);

  return (
    <button
      onClick={() => {
        clickHappened(text, setText);
      }}
    >
      {text}
    </button>
  );
}

export default Button;

//Above: button text change on click with timeout solved with state change

//Below: button text change on click with timeout solved with pure js function

// import React from 'react';
// import './button.css';

// let timeOut;
// let prevHTML;

// function clickHappened(e) {

//     console.log(prevHTML)

//     const goodHTML = "Goodbye";

//     if (e.target.innerHTML !== goodHTML) {
//         prevHTML = e.target.innerHTML;
//         e.target.innerHTML = goodHTML;
//         timeOut = setTimeout(()=>e.target.innerHTML = prevHTML, 3000);
//     } else {
//         clearTimeout(timeOut);
//         e.target.innerHTML = prevHTML;
//     }

// }

// function Button(props) {

//     return (
//         <button onClick={clickHappened}>{props.text}</button>
//     );
// }

// export default Button
