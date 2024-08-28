import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  return axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsername = (token) => {
  const decode = jwtDecode(token);
  return decode.user;
};
