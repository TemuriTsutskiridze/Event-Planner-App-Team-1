import { Children, createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  err: any;
  setErr: (error: any) => void;
  registerUser: (
    email: string,
    username: string,
    password: string,
    passwordRe: string
  ) => void;
  loginUser: (email: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isready, setIsReady] = useState(false);
  const [err, setErr] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    setIsReady(true);
  }, []);

  const registerUser = async (
    username: string,
    password1: string,
    password2: string,
    email: string
  ) => {
    await registerAPI(username, password1, password2, email)
      .then((res) => {
        console.log(res);
        if (res) {
          // localStorage.setItem("token", res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
            password: res?.data.password,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          // setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Login Success!");
          navigate("/Sign_in");
        }
      })
      .catch((e) => {
        toast.warning("Server error occurred");
      });
  };

  const loginUser = async (email: string, password: string) => {
    await loginAPI(email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("token", res?.data.access);
          const userObj = {
            password: res.config.data.password,
            email: res.config.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.access!);
          setUser(userObj!);
          console.log(userObj);
          toast.success("Login Success!");
          navigate("/events");
        }
      })
      .catch((e) => {
        toast.warning("Server error occurred");
        console.log(e);
      });
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/Sign_in");
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user,
        token,
        logout,
        err,
        setErr,
        isLoggedIn,
        registerUser,
      }}
    >
      {isready ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
