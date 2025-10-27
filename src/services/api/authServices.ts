import axios from "axios";
import { loginForm } from "../../Types";
import axiosInstance from "../../Axios";

export const UserLogin = (formValues: loginForm) => {
  axiosInstance
    .post("/login", {
      email: formValues.email,
      password: formValues.password,
      username: formValues.email,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const UserLogout = () => {
  axiosInstance
    .post("/logout")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
