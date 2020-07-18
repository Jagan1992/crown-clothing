import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in-style.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
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
                  value={this.state.email}
                  handleChange={this.handleInput}
                  label="Email"
                  required
                />
                <FormInput
                  type="password"
                  name="password"
                  value={this.state.password}
                  handleChange={this.handleInput}
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
                    handleClick={signInWithGoogle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignIn;
