import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import {Button, TextField, Grid, Paper, Typography} from '@mui/material';


const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();

    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <>
             <Grid container style={{minHeight: '100vh'}}>
            <Grid item xs={12} sm={6} md={5} style={{margin: 'auto'}}>
                <Paper style={{padding: 20, marginTop: 8}}>
            <Typography variant="h5" align="center" margin="dense">
            Login Page
           
                     
                        <br>
                        </br>
                        
            <TextField label="User Name"  type="user name" fullWidth margin="normal" value={userName} onChange={e => {
                setUserName(e.target.value);
            }}>
                </TextField>

                
                <br />
            <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => {
                setPassword(e.target.value);
            }}>

            </TextField>
            
            <br />
            <br></br>
            
            <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            fullWidth
                            style={{margin: '24px 0'}}
                        
                           onClick={login}> Login
                        </Button>  
          

            <p>Not Registered?
                
                <Link to="/signup">Sign Up!</Link>
                </p>
                </Typography>
               

                </Paper>
            </Grid>
        </Grid>
        </>
    );
};

export default LoginPage;