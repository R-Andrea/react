import React, { useState, useEffect } from 'react';

function ContactForm() {

  const [formSubmit, setFormSubmit] = useState(false)

  useEffect(() => {
    function logBooking(e) {
        let array = Array.from(e.target)
    
        console.log(array.map((input) => input.value))
        //console.log(e.target)
    } //separate function allows this to be called on event listener

    document.addEventListener("submit", logBooking) //works b/c useEffect also runs on first render
    console.log(formSubmit)

    return () => {
        document.removeEventListener("submit", logBooking) //prevents addEventListeners from piling up after each state change
    }
  
  },[formSubmit] ); //formSubmit:  this useEffect is called only when formSubmit state changes

  return (
    <div>

        <form onSubmit={(e) => {e.preventDefault();}}>
            <input placeholder="First name"></input>
            <input placeholder="Last name"></input>
            <input placeholder="Email"></input>
            <button type="submit" onClick={ ()=>{ setFormSubmit(true)} }>Submit</button>
        </form>
      {/*  onClick arrow function prevents state change on render */}
    </div>
  );
}

export default ContactForm;