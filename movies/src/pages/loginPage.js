import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { TextField, Grid, Paper, } from '@mui/material';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f7f7f7;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  color: #333;
`;



const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #aaa;
  border-radius: 3px;
  font-size: 16px;
`;

const Head = styled.button`
  width: 100%;
  padding: 12px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: blue;
  }
`;

const SignupLink = styled.p`
  color: #555;

  a {
    color: #e74c3c;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


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
                <br></br>

        <Container>
        <Title>Login Page</Title>
        <Input
          id="username"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Head onClick={login}>Log In</Head>
        <SignupLink>
            <br></br>
            <Typography variant="body1" fontWeight="bold">
    Not Registered? 
  </Typography>  <Link to="/signup" style={{ textDecoration: 'none' }}>
    <Head variant="contained" color="primary">
      Sign Up!
    </Head>
  </Link>
</SignupLink>
      </Container>
      </>
    );
};

export default LoginPage;