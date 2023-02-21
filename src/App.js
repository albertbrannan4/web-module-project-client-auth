import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import GetFriends from "./components/GetFriends";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Brand>FRIENDS DATABASE</Brand>
        <NavStyles>
          <StyledLinkWrapper>
            <Link style={StyledLink} to="/login">
              Login
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link style={StyledLink} to="/login">
              Logout
            </Link>
          </StyledLinkWrapper>
        </NavStyles>
      </NavBar>
      <Routes>
        <Route
          path="/getFriends"
          element={
            <PrivateRoute>
              <GetFriends />
            </PrivateRoute>
          }
        />
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

const StyledLinkWrapper = styled.li`
  list-style: none;
  border: 1px solid black;
  width: 5em;
  padding: 5%;
  background-color: black;
`;

const StyledLink = { textDecoration: "none", color: "white" };

const Brand = styled.h2`
  font-family: "Hind", sans-serif;
`;

export default App;
