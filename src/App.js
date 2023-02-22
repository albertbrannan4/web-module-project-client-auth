import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import GetFriends from "./components/GetFriends";
import styled from "styled-components";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const postFriend = (newFriend) => {
  const token = localStorage.getItem("token");
  axios
    .create({
      baseUrl: "http://localhost:9000/api/",
      headers: { authorization: token },
    })
    .post("http://localhost:9000/api/friends", newFriend)
    .then((res) => {
      // setState([...state, newFriend]);
      console.log(res);
    })
    .catch((err) => console.log(err));
};

// const logout = () => {
//   const token = localStorage.getItem("token");
//   axios
//     .create({
//       baseUrl: "http://localhost:9000/api/",
//       headers: { authorization: token },
//     })
//     .post("http://localhost:9000/api/logout", token)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => console.log(err))
//     .finally(() => {
//       localStorage.clear();
//     });
// };

function App() {
  const [friends, setFriends] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  const addingNewFriends = (newFriend) => {
    const { name, email } = newFriend;
    const addedFriend = { id: Date.now(), name, email };
    postFriend(addedFriend);
  };

  return (
    <div className="App">
      <NavBar>
        <Brand>FRIENDS DATABASE</Brand>
        <NavStyles>
          <StyledLinkWrapper>
            <Link style={StyledLink} to="/">
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
              to="/"
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
              <GetFriends friends={friends} getFriendsTool={getFriendsTool} />
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
        <Route path="/" element={<Login />} />
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
