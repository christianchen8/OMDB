import axios from "axios";
import { LOG_USER } from "../constants";

const logUsers = (user) => ({
  type: LOG_USER,
  user,
});

export const createUser = (email, password)=>{
  return ()=> axios.post("/api/user/register", {
    email: email,
    password: password,
  });
};

export const loginUser = (email, password) => (dispatch) => {
  return axios
    .post("/api/user/login", {
      password: password,
      email: email,
    })
    .then((res) => dispatch(logUsers(res.data)));
};

export const logoutUser = () => (dispatch) => {
  return axios
    .post("/api/user/logout")
    .then(() => dispatch(logUsers({})))
};

export const stayLog = () => (dispatch) => {
  return axios
    .post("/api/user/checksession")
    .then((res) => dispatch(logUsers(res.data)));
};

