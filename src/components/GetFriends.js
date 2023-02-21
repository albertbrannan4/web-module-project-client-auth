import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const GetFriends = () => {
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
  console.log(friends);
  return (
    <div>
      <Header>FRIENDS LIST</Header>
      <div>
        {friends.map((friend) => {
          return (
            <div key={friend.id}>
              <FriendStyles>
                - {friend.name.toUpperCase()} - {friend.email.toUpperCase()}
              </FriendStyles>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FriendStyles = styled.p`
  font-family: "Hind", sans-serif;
  font-weight: 800;
`;

const Header = styled.h2`
  font-family: "Hind", sans-serif;
  font-size: 3.4rem;
  padding: 0;
  margin: 0;
`;

export default GetFriends;
