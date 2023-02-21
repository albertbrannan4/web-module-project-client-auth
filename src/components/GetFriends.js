import React, { useEffect } from "react";
import axios from "axios";
const GetFriends = () => {
  const getFriendsTool = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    //return axios;
    //   .create({
    //     baseUrl: "http://localhost:9000/api/friends",
    //     headers: { authorization: token },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  useEffect(() => {
    getFriendsTool();
  }, []);

  return (
    <div>
      <h1>Hello Friends</h1>
    </div>
  );
};

export default GetFriends;
