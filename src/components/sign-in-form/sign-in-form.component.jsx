import React, { useState } from "react";

import { BaseButton, GoogleSignInButton } from "../button/button.styles";

import FormInput from "../form-input/form-input.component";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import { ReactComponent as GoogleLogo } from "../../assets/Google_Logo.svg";

import "../error-modal/error-modal.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      resetFormFields();
      setError(false);
    } catch (err) {
      setErrorMessage(err.message);
      if (err.code === "auth/user-not-found") {
        setErrorMessage("User not found!");
      }
      if (err.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password for email!");
      }
      setError(true);
      // it can help to auto close a modal
      // setTimeout(() => setError(false), 7000);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onClickHandler = () => {
    setError(false);
  };

  return (
    <div className="sign-up-container">
      {error && (
        <div className="modal">
          <h2>Something went wrong 🤷‍♀️</h2>
          <div className="message">{errorMessage}</div>
          <BaseButton onClick={onClickHandler}>Ok</BaseButton>
        </div>
      )}

      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <BaseButton type="submit">Sign In</BaseButton>
          <GoogleSignInButton
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            <GoogleLogo />
            Google auth
          </GoogleSignInButton>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
