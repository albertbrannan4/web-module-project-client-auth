import React, { useEffect, useState } from "react";
import axios from "axios";
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
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <p>{friend.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetFriends;
