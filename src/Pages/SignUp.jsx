import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

import { ReactComponent as ArrowRightIcon } from "../Assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../Assets/svg/visibilityIcon.svg";

import { OAuth } from "../Components";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCopy, setShowPasswordCopy] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCopy: "",
  });
  const { email, password, name, passwordCopy } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const passwordValidation = () => {
    if (password.length < 7 || password.length > 14) {
      toast.warning("Password should have between 7 and 14 symbols");
      return false;
    }
    if (
      !password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      )
    ) {
      toast.warning(
        "Password needs 1 digit, 1 special character, 1 uppercase letter."
      );
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!passwordValidation()) return;

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formData.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
        return;
      }

      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back!</p>
        </header>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput"
            placeholder="name"
            id="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="Show Password"
              className="showPassword"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="passwordInputDiv">
            <input
              type={showPasswordCopy ? "text" : "password"}
              className="passwordInput"
              placeholder="Repeat your password"
              id="passwordCopy"
              value={passwordCopy}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="Show Password"
              className="showPassword"
              onClick={() => setShowPasswordCopy(!showPasswordCopy)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password ?
          </Link>
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <OAuth />

        <Link to="/sign-in" className="registerLink">
          Sign In instead
        </Link>
      </div>
    </>
  );
}

export default SignUp;
