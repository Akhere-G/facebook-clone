import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

export default function Login() {
  const [{ state }, dispath] = useStateValue();

  const signIn = (e) => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispath({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          className="login_img"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <img
          className="login_text"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}
