import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
const initLogin = { name: "", email: "" };

const AddFriend = (props) => {
  const [formInput, setFormInput] = useState(initLogin);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    props.addNewFriend(formInput);
    navigate("/get_friends");
  };

  return (
    <PageFormat>
      <Header>ADD FRIEND</Header>
      <Form onSubmit={submit}>
        <Label>FRIEND NAME</Label>
        <Input
          type="text"
          name="name"
          onChange={inputHandler}
          value={formInput.name}
        />
        <Label>FRIEND EMAIL</Label>
        <Input
          type="email"
          name="email"
          onChange={inputHandler}
          value={formInput.email}
        />
        <Button>SUBMIT</Button>
      </Form>
    </PageFormat>
  );
};

const PageFormat = styled.div`
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
AddFriend.propTypes = {
  addNewFriend: PropTypes.func,
};

export default AddFriend;
