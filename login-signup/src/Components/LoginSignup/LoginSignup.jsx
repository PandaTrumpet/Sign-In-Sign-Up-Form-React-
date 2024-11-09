import React, { useState } from "react";
import css from "./LoginSignup.module.css";
import clsx from "clsx";
import userIcon from "../Assets/person.png";
import emailIcon from "../Assets/email.png";
import passwordIcon from "../Assets/password.png";
const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div>
      <div className={css.container}>
        <div className={css.header}>
          <div className={css.text}>{action}</div>
          <div className={css.underline}></div>
        </div>

        <div className={css.inputs}>
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className={css.input}>
              <img src={userIcon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className={css.input}>
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className={css.input}>
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className={css.forgotPassword}>
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className={css.submitContainer}>
          <div
            className={clsx(action === "Login" ? css.gray : "", css.submit)}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={clsx(action === "Sign Up" ? css.gray : "", css.submit)}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
