import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableChartIcon from '@material-ui/icons/TableChart';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Booking() {
    const classes = useStyles();
    
    const [baseError, setError] = useState(null);
    const [text, setText] = useState("")

    function validateMail(e) {
        
        let inputMail = e.target.value;
        const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        console.log(inputMail);
        if (regexMail.test(inputMail) === false) {
           setError(true);
           setText("Invalid email address")
        } else  {
          setError(null);
          setText("")
        }
        console.log(regexMail.test(inputMail)); 
    }
  


    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="standard-required" label="Name" />
        </div>
        <div>
          <TextField required id="standard-required" label="Email" type="email" onBlur={validateMail}  error={baseError} helperText={text}  />
        </div>
        <div>
        <TextField
          required
          id="datetime-local"
          label="Time of booking"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div>
          <TextField
            required
            id="outlined-number"
            label="Number of people"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}  
          />
        </div>
        <div>
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<TableChartIcon>send</TableChartIcon>}
            type="submit"
        >
            Send
        </Button>
        </div>
      </form>
    );
  }