import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GetFriends = (props) => {
  useEffect(() => {
    props.getFriendsTool();
  }, []);
  useEffect(() => {}, [props.friends]);
  console.log(props.friends);
  return (
    <div>
      <Header>FRIENDS LIST</Header>
      <div>
        {props.friends.map((friend) => {
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

GetFriends.propTypes = {
  friends: PropTypes.array,
  getFriendsTool: PropTypes.func,
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
