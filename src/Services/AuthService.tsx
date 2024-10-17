import axios from "axios";
import { handleError } from "../Helpers/ErrorHanlder";
import { UserProfileToken } from "../Models/User";

const api = "https://event-planner-api-production.up.railway.app/api/";

export const registerAPI = async (
  email: string,
  username: string,
  password: string,
  passwordRe: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "registration/", {
      email: email,
      username: username,
      password: password,
      passwordRe: passwordRe,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "login/", {
      email: email,
      password: password,
    });
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
