import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { googleSignIn } from "../../reducer/user-reducer/user-actions";
import { signInWithEmail } from "../../reducer/user-reducer/user-actions";
import "./sign-in-style.scss";

const SignIn = ({ signInWithEmail, googleSignIn }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmail(email, password);
    setCredentials({ email: "", password: "" });
  };

  const handleInput = (event) => {
    setCredentials({
      //..userCredentials
      email: email,
      password: password,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="container d-flex">
        <div className="card card-top-align">
          <div className="sign-in">
            <div className="card-header">
              <h2 className="spacing font-weight-bold">
                If you already have an account
              </h2>
            </div>
            <div className="card-body">
              <div className="card-title">
                <span>Sign in with your Email and Password</span>
              </div>
              <FormInput
                type="email"
                name="email"
                value={email}
                handleChange={handleInput}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                handleChange={handleInput}
                label="Password"
                required
              />
              <div>
                <CustomButton
                  type="submit"
                  value="SIGN IN"
                  className="custom-button mr-4 btn"
                />
                <CustomButton
                  type="button"
                  value="SIGN IN WITH GOOGLE"
                  className="custom-button google-Button btn"
                  handleClick={googleSignIn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDisPatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignIn()),
  signInWithEmail: (email, password) =>
    dispatch(signInWithEmail(email, password)),
});

export default connect(null, mapDisPatchToProps)(SignIn);
