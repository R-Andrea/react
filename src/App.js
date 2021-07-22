import "./App.css";
// import ContactForm from "./components/form/booking/contactForm/contactForm";
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const myTheme = createTheme({
  palette: {
    primary: {
      light: '#489ca6',
      main: '#006d77',
      dark: '#00424b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#000',
    },
  },
  // overrides: {
  //   MuiFormLabelRoot: {
  //     color: "#ffffff !important",
  //     fontSize: "500px",
  //   },
  // }
});


const forms = {};

function App() {





    const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: theme.palette.secondary.main,
        padding: "40px",
        borderRadius: "35px",
        margin: "20px",
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        display: "flex",
        flexDirection: "column",
        
        },

    },
  
    }));
    
    const classes = useStyles();

  const [formSubmit, setFormSubmit] = useState(false)

 //formSubmit:  this useEffect is called only when formSubmit state changes
 useEffect(() => {
  function logBooking(e) {
    console.log(e.target)

    let realForm = e.target.closest("form")
    console.log(realForm)

    if (e.target.tagname === "FORM") {
      realForm = e.target;
    }

    console.log(realForm)
    let formID = realForm.id;

      let array = Array.from(realForm)
  
      console.log(Object.fromEntries(array.map((input) => [input.name, input.value])), formID)

      let inputObject = Object.fromEntries(array.map((input) => [input.name, input.value]))
  
      let newObject = Object.fromEntries([[formID, inputObject]])

      Object.assign(forms, newObject)
      console.log(forms)
      //console.log(e.target)
  } //separate function allows this to be called on event listener

  document.addEventListener("input", logBooking) //works b/c useEffect also runs on first render
  document.addEventListener("submit", logBooking)
  console.log(formSubmit)

  return () => {
      document.removeEventListener("input", logBooking) //prevents addEventListeners from piling up after each state change
      document.removeEventListener("submit", logBooking)
    }

},[formSubmit] );



  return (
    <>
      <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
    <form id="contactForm" noValidate autoComplete="off" onSubmit={(e) => {e.preventDefault();}}>

        <TextField 
            //required 
            onInput = {(e) => {setFormSubmit(true)}}
            id="standard-required" 
            label="First Name" 
            name="FirstName"
            color="primary"
            InputProps={{inputProps: {className: "inputFields"}}}
        />
        <TextField 
            //required 
            id="standard-required" 
            label="Last Name" 
            name="LastName"
            InputProps={{inputProps: {className: "inputFields"}}}
        />
        <TextField 
            //required 
            id="standard-required" 
            label="Email" 
            name="Email"
            type="email" 
            // onBlur={validateMail} 
            // error={baseError} 
            //helperText={text}  
            InputProps={{inputProps: {className: "inputFields"}}}
        />

        <Button variant="contained" color="primary" type="submit" onClick={ ()=>{ setFormSubmit(true)} }>Submit</Button>

    {/*  onClick arrow function prevents state change on render */}
    </form>
    <form id="addressForm"  noValidate autoComplete="off" onSubmit={(e) => {e.preventDefault();}}>

        <TextField 
            id="standard-required" 
            label="Address" 
            name="Address"
            color="primary"
            InputProps={{inputProps: {className: "inputFields"}}}
        />
        <TextField 
            id="standard-required" 
            label="Country" 
            name="Country"
            InputProps={{inputProps: {className: "inputFields"}}}
        />
        <TextField 
            id="standard-required" 
            label="Zip" 
            name="Zip"
            InputProps={{inputProps: {className: "inputFields"}}}
        />

        <Button variant="contained" color="primary" type="submit" onClick={ ()=>{ setFormSubmit(true)} }>Submit</Button>

        {/*  onClick arrow function prevents state change on render */}
    </form>
    </div> 
      </ThemeProvider>

    </>
  );
}

export default App;
