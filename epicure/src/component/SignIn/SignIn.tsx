import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./SignIn.css";

const SignIn: React.FC = () => {
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] = useState("");
  const [firstName, setFirstName]: [string, Dispatch<SetStateAction<string>>] = useState("");
  const [lastName, setLastName]: [string, Dispatch<SetStateAction<string>>] = useState("");
  const [address, setAddress]: [string, Dispatch<SetStateAction<string>>] = useState("");
  const [phone, setPhone]: [string, Dispatch<SetStateAction<string>>] = useState("");
  const [password, setPassword]: any = useState("");
  const [black, setBlack]: [string, Dispatch<SetStateAction<string>>] =
    useState("");
  const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const passwordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (password != "" && email != "" && firstName != "" && lastName != "" && address != "" && phone != "") {
      setBlack("black-style");
    } else {
      setBlack("");
    }
  }, [email, password, firstName, lastName, address, phone]);

  return (
    <>
      <Navbar />
      <div id="sign-container">
        <div id="sign-main">
          <div id="sign-title">
            <h1>Sign in</h1>
            <h2>Please enter your details</h2>
          </div>
          <form id="sign-details" action="">
            <label htmlFor="">First Name</label>
            <input onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="first-name"
              placeholder="Enter Your First Name"
            />
            <label htmlFor="">Last Name</label>
            <input onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="last-name"
              placeholder="Enter Your Last Name"
            />
            <label htmlFor="">Address</label>
            <input onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="Address"
              placeholder="Enter Your Address"
            />
            <label htmlFor="">Phone</label>
            <input onChange={(e) => setPhone(e.target.value)} type="text" name="Address" placeholder="Enter Your Phone Number" />
            <label htmlFor="">Email</label>
            <input onChange={emailOnChange} type="text" name="email" placeholder="Email address" />
            <label htmlFor="">Password</label>
            <input onChange={passwordOnChange} type="password" name="password" placeholder="Password" />
          </form>
            <button id={black} className="sign-in-btn">
              SIGN UP
            </button>
          <section></section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
