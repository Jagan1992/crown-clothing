import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.style.scss";

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password doesn't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (event) => {
    setCredentials({
      displayName: displayName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <div className="sign-up">
        <div className="container d-flex">
          <div className="card card-top-align">
            <div className="sign-in">
              <div className="card-header">
                <h2 className="spacing font-weight-bold">
                  If don't have an account please register
                </h2>
              </div>
              <div className="card-body">
                <div className="card-title">
                  <span>Sign up with your Email and Password</span>
                </div>
                <div>
                  <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleInput}
                    label="Name"
                    required
                  />
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
                  <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleInput}
                    label="Confirm Password"
                    required
                  />
                  <CustomButton
                    type="submit"
                    className="custom-button btn"
                    value="SIGN UP"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
