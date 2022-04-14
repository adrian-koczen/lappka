import React, { useState } from "react";
import styles from "./styles.module.css";
import mobile from "is-mobile";
// Assets
import logo from "../../assets/logo.svg";
import logoText from "../../assets/logoText.svg";
import loginField from "../../assets/signin/loginField.svg";
import passwordField from "../../assets/signin/passwordField.svg";
import facebook from "../../assets/signin/facebook.svg";
import google from "../../assets/signin/google.svg";

const SigninDesktop = ({ setAuth }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "xxxxxxx",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clearData = (e) => {
    setFormData({ ...formData, [e.target.name]: "" });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setAuth((prev) => !prev);
  };
  return (
    <div className={mobile() ? styles.containerMobile : styles.container}>
      <form
        onSubmit={submitHandler}
        className={mobile() ? styles.loginFormMobile : styles.loginForm}
      >
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />
          <img className={styles.logoText} src={logoText} alt="logoText" />
        </div>
        <span className={styles.welcomeText}>
          {mobile() ? "Zaloguj się" : "Zaloguj się do aplikacji"}
        </span>
        <div className={styles.bottomLine}></div>
        <div
          className={styles.inputContainer}
          style={mobile() ? { marginBottom: "20px" } : { marginBottom: "25px" }}
        >
          <img className={styles.inputIcon} src={loginField} alt="loginIcon" />
          <input
            name="login"
            className={styles.input}
            placeholder="login"
            type="text"
            value={formData.login}
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className={`${styles.inputContainer} ${styles.noMargin}`}>
          <img
            className={styles.inputIcon}
            src={passwordField}
            alt="passwordIcon"
          />
          <input
            name="password"
            className={`${styles.input} ${styles.inputPassword}`}
            type="password"
            value={formData.password}
            onChange={changeHandler}
            onClick={clearData}
            required
          ></input>
        </div>
        <div className={styles.additionalInputs}>
          <div className={styles.dontForget}>
            <input
              className={styles.checkBox}
              type="checkbox"
              id="notForgetData"
            />
            <span>Zapamiętaj mnie</span>
          </div>
          <a className={styles.forgotPassword} href="/">
            Zapomniałeś hasła?
          </a>
        </div>
        <button
          type="submit"
          className={mobile() ? styles.buttonMobile : styles.button}
        >
          ZALOGUJ SIĘ
        </button>
        <div className={styles.additionalLogin}>
          <span className={styles.additionalLoginText}>
            Lub zaloguj się przez
          </span>
          <div className={styles.additionalLoginIcons}>
            <img
              className={styles.additionalLoginIcon}
              src={facebook}
              alt="facebookIcon"
            />
            <img
              className={styles.additionalLoginIcon}
              src={google}
              alt="googleIcon"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninDesktop;
