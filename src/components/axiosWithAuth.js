import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseUrl: "http://localhost:9000/api/friends",
    headers: { authorization: token },
  });
};
