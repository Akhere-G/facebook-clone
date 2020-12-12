import React from "react";
import styles from "../styles/Login.module.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";

export default function Login() {
  const { setUser } = useStateValue();

  const signIn = e => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then(result => setUser(result.user))
      .catch(error => console.log(error.message));
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
        <button className={styles.loginButton} type='submit' onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
