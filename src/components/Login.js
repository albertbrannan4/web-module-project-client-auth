import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initLogin = { username: "", password: "" };
const Login = () => {
  const [formInput, setFormInput] = useState(initLogin);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", formInput)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/getFriends");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <LoginPage>
      <Header>LOGIN</Header>
      <Form onSubmit={submit}>
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
  font-size: 1.5;
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

export default Login;
