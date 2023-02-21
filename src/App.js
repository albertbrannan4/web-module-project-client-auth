import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import GetFriends from "./components/GetFriends";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Brand>FRIENDS DATABASE</Brand>
        <NavStyles>
          <StyledLink>
            <Link to="/login">Login</Link>
          </StyledLink>
          <StyledLink>
            <Link to="/login">Logout</Link>
          </StyledLink>
        </NavStyles>
      </NavBar>
      <Routes>
        <Route exact path="/getFriends" element={<GetFriends />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black;
  margin-bottom: 1%;
`;
const NavStyles = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1%;
  width: 20%;
`;

const StyledLink = styled.li`
  list-style: none;
`;

const Brand = styled.h2`
  font-family: "Hind", sans-serif;
`;

export default App;
