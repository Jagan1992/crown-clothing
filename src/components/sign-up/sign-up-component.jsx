import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
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

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
      <form onSubmit={this.handleSubmit} className="sign-up-form">
        <div className="sign-up">
          <div className="container d-flex">
            <div className="card card-top-align">
              <div className="sign-in">
                <div className="card-header">
                  <h2 className="spacing">
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
                      value={this.state.displayName}
                      handleChange={this.handleInput}
                      label="Name"
                      required
                    />
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
                    <FormInput
                      type="password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      handleChange={this.handleInput}
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
  }
}

export default SignUp;
