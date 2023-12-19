import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import {Button, TextField, Grid, Paper, Typography} from '@mui/material';


const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate onClick="/login" />;
  }

  return (
    <>
      <Grid container style={{minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} md={5} style={{margin: 'auto'}}>
                <Paper style={{padding: 20, marginTop: 8}}>
            <Typography variant="h5" align="center" margin="dense">
            Sign Up Page


      <TextField label="User Name"  type="user name" fullWidth margin="normal" value={userName} onChange={e => {
                setUserName(e.target.value);
            }}>
                </TextField>


      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => {
                setPassword(e.target.value);
            }}>

              </TextField>

     <TextField label="Password Again" type="Password Again" fullWidth margin="normal" value={passwordAgain} onChange={e => {
                setPasswordAgain(e.target.value);
            }}>

              </TextField>

      <br />
  
      <br />
      {/* Login web form  */}
    
      <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            fullWidth
                            style={{margin: '24px 0'}}
                        
                           onClick={register}> Register
                        </Button>  
      </Typography>
               

               </Paper>
           </Grid>
       </Grid>
    </>
  );
};

export default SignUpPage;