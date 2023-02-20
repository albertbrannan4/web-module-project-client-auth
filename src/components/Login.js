import React, { useState } from "react";
import styled from "styled-components";

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
  font-family: "Hind", sans-serif;
  margin: 0;
  text-align: start;
`;

const Header = styled.h2`
  font-family: "Hind", sans-serif;
  font-size: 3.4rem;
  padding: 0;
  margin: 0;
`;
const Label = styled.label`
  font-weight: 900;
`;

const Input = styled.input`
  background-color: black;
  color: white;
  padding: 3%;
  font-weight: 900;
`;
const Button = styled.button`
  margin-top: 2.5%;
  background-color: black;
  color: white;
  padding: 3%;
  font-weight: 900;
`;
const initLogin = { username: "", password: "" };
const Login = () => {
  const [formInput, setFormInput] = useState(initLogin);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <LoginPage>
      <Header>LOGIN</Header>
      <Form>
        <Label>USERNAME</Label>
        <Input
          type="text"
          name="username"
          onChange={inputHandler}
          value={formInput.username}
        />
        <Label>PASSWORD</Label>
        <Input
          type="password"
          name="password"
          onChange={inputHandler}
          value={formInput.password}
        />
        <Button>SUBMIT</Button>
      </Form>
    </LoginPage>
  );
};

export default Login;
