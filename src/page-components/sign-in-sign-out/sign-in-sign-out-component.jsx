import React from "react";
import SignIn from "../../components/sign-in/sign-in-component";
import SignUp from "../../components/sign-up/sign-up-component";
import "./sign-in-sign-out.style.scss";

const SignInSignOut = () => {
  return (
    <div className="font-weight-bold sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignOut;
