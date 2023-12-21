import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import styled from 'styled-components';

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

const SignUpPage = props => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState("");

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      try {
        // Assuming context.register returns a Promise
        context.register(userName, password).then(() => {
          setRegistered(true);
        }).catch(() => {
          setError("Registration failed. Please try again.");
        });
      } catch (error) {
        setError("Registration failed. Please try again.");
      }
    } else {
      setError("Invalid password or passwords do not match.");
    }
  };

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <br></br>
      <Container>
        <Title>Sign Up Page</Title>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password Again"
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Head onClick={register}>Register</Head>
     
      </Container>
    </>
  );
};

export default SignUpPage;
