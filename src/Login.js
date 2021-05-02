import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import "./login.css";
import { login } from "./features/userSlice";
function Login() {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const logintoapp = () => {};
  const register = () => {
    if (!name) {
      return console.log("Please enter a full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profile,
              })
            );
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login ">
      <img src="https://qph.fs.quoracdn.net/main-qimg-05f1ceb11a77b68fd6bf72da21b3400c" />
      <form>
        <input
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        ></input>
        <input
          placeholder="Profile pic"
          value={profile}
          onChange={(e) => {
            setProfile(e.target.value);
          }}
          type="text"
        ></input>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          type="email"
        ></input>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        ></input>
        <button type="submit" onClick={logintoapp}>
          Sign In
        </button>
      </form>
      <p>Not a member?</p>
      <span className="login_register" onClick={register}>
        Register now
      </span>
    </div>
  );
}

export default Login;
