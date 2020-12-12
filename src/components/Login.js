import React from "react";
import styles from "../styles/Login.module.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

export default function Login() {
  const [dispatch] = useStateValue();

  const signIn = e => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch(error => alert(error.message));
    e.preventDefault();
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginCenter}>
        <div className={styles.loginLogo}>
          <img
            className={styles.loginImg}
            src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
            alt='facebook logo'
          />
          <img
            className={styles.loginText}
            src='https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg'
            alt='facebook text'
          />
        </div>
        <Button className={styles.loginButton} type='submit' onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
