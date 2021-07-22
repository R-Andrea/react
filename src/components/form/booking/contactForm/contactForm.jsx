import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';




function ContactForm() {

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

  return (
    <div className={classes.root}>
    <form id="contactForm" noValidate autoComplete="off" onSubmit={(e) => {e.preventDefault();}}>

        <TextField 
            //required 
            id="standard-required" 
            label="First Name" 
            name="Name"
            color="primary"
            InputProps={{inputProps: {className: "inputFields"}}}
        />
        <TextField 
            //required 
            id="standard-required" 
            label="Last Name" 
            name="Name"
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
  );
}

export default ContactForm;