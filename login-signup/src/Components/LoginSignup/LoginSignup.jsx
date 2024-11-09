import React from "react";
import css from "./LoginSignup.module.css";
import userIcon from "../Assets/person.png";
import emailIcon from "../Assets/email.png";
import passwordIcon from "../Assets/password.png";
const LoginSignup = () => {
  return (
    <div>
      <div className={css.container}>
        <div className={css.header}>
          <div className={css.text}>Sign Up</div>
          <div className={css.underline}></div>
        </div>

        <div className={css.inputs}>
          <div className={css.input}>
            <img src={userIcon} alt="" />
            <input type="text" />
          </div>
          <div className={css.inputs}>
            <img src={emailIcon} alt="" />
            <input type="email" />
          </div>
          <div className={css.inputs}>
            <img src={passwordIcon} alt="" />
            <input type="password" />
          </div>
        </div>
        <div className={css.forgotPassword}>
          Lost Password? <span>Click Here!</span>
        </div>
        <div className={css.submitContainer}>
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
