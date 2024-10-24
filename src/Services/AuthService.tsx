import axios from "axios";
import { handleError } from "../Helpers/ErrorHanlder";
import { UserProfile, UserProfileToken } from "../Models/User";

const api = "https://event-planner-api-production.up.railway.app/api/";

export const registerAPI = async (
  username: string,
  password1: string,
  password2: string,
  email: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "registration/", {
      username: username,
      password1: password1,
      password2: password2,
      email: email,
    });
    console.log(data);
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
