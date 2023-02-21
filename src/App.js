import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import GetFriends from "./components/GetFriends";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import axios from "axios";
function App() {
  const [friends, setFriends] = useState([]);
  const getFriendsTool = async () => {
    const token = localStorage.getItem("token");
    return axios
      .create({
        baseUrl: "http://localhost:9000/api/",
        headers: { authorization: token },
      })
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getFriendsTool();
  }, []);

  const addingNewFriends = (newFriend) => {
    const { name, email } = newFriend;
    const addedFriend = { id: Date.now(), name, email };
    setFriends([...friends, addedFriend]);
  };

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
            <Link style={StyledLink} to="/add_friend">
              Add Friend
            </Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link
              style={StyledLink}
              onClick={() => localStorage.clear()}
              to="/login"
            >
              Logout
            </Link>
          </StyledLinkWrapper>
        </NavStyles>
      </NavBar>
      <Routes>
        <Route
          path="/get_friends"
          element={
            <PrivateRoute>
              <GetFriends friends={friends} />
            </PrivateRoute>
          }
        />
        <Route
          path="/add_friend"
          element={
            <PrivateRoute>
              <AddFriend addNewFriend={addingNewFriends} />
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
  width: 40%;
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
