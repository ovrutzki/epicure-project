import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./LogIn.css";
import { useDispatch, useSelector } from "react-redux";
import loginUserStore, { getUserData } from "../../store/slicer/userSlicre";
import { IRootState } from "../../store/store/store";
import axios from "axios";

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state: IRootState) => state.user.value);
  const navigate = useNavigate();
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] =
    useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState<any>({});
  const [userToken, setUserToken] = useState<any>();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const [black, setBlack]: [string, Dispatch<SetStateAction<string>>] =
    useState("");
  const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const passwordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (password != "" && email != "") {
      setBlack("black-style");
    } else {
      setBlack("");
    }
  }, [email, password]);

  const loginUser = async (email: string, password: string) => {
    try {
      const userData = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      dispatch(getUserData(userData.data.user));
      navigate("/");
    } catch (error: any) {
      alert(error.message)
      console.log(error);
    }    
  };
  

  const handleLogin = (e: any) => {
    e.preventDefault();
    loginUser(email, password);
  };

 

  return (
    <>
      <Navbar />
      <div id="login-container">
        <div id="login-main">
          <div id="title">
            <h1>Log in</h1>
            <h2>To continue the order, please sign in</h2>
          </div>
          <form id="login-details" action="">
            <input
              onChange={emailOnChange}
              type="text"
              name="email"
              placeholder="Email address"
            />
            <input
              onChange={passwordOnChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <button
              onClick={handleLogin}
              className="login-btn"
              id={black}
              type="submit"
            >
              LOGIN
            </button>
            <p>Forget password?</p>
          </form>
          <section>
            <hr />
            <p>or</p> <hr />
          </section>
          <button onClick={() => navigate("/sign-in")} id="sign-in-btn">
            SIGN UP
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
