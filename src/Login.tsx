import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import "./Login.css";
import { login } from "./features/userSlice";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const dispatch = useDispatch();
  const register = async () => {
    if (!name) {
      return alert("Please enter the fullname");
    }
    await auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      const user = userAuth.user;// For error might be null
      user
        ?.updateProfile({
          displayName: name,
          photoURL: photoURL,
        })
        .then(() => {
          dispatch( //DIspatch an action of login, login need bunch of info
            login({
              email: user.email,
              uid: user.uid,
              displayName: name,
              photoURL: photoURL,
            })
          );
        }).catch(err =>{
            alert(err)
        });
    });
  };
  const loginToApp = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    await auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
        const user = userAuth.user
        dispatch(login({
            email: user?.email,
            uid: user?.uid,
            displayName: name,
            photoURL: photoURL,
        })
        );
    }).catch(error => alert(error))
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
        alt="Logo"
      />
      <form action="">
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};
