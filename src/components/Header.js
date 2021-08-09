import {React,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DataTable from './DataTable';
import { Formik } from 'formik';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Header=()=> {
  const classes = useStyles();
  const initialState = {
   
};
  
  const [countrydata,setCountrydata]=useState(initialState);
  const [firsttime,setFirsttime]=useState(true);
  const onSubmitform=(event)=>{
    event.preventDefault();
    const axios = require('axios');
    const country=event.target[0].value;
    const url=`https://restcountries.eu/rest/v2/name/${country}??fullText=true`;
    
    
    axios.get(url)
  .then(function (response) {
    
    // handle success
    if(response.status===200){
    setCountrydata(response);
    setFirsttime(false);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  
  
  


};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
          Get Country's relevent details
        </Typography>
        <Grid container spacing={0}>
            <Grid item>
        <form className={classes.form} onSubmit={onSubmitform}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            id="email"
            label="Country"
            name="country"
            autoComplete="country"
            autoFocus
            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit} 
            
          >
            Get Details
          </Button>
         
           </form>
           </Grid>
          
          </Grid>
          <Grid item>
          {!firsttime && <DataTable countrydata1={countrydata} />}
          </Grid>
        </div>
    </Container>
  );
}
export default Header ;