import React, { useState } from "react";
import Button from "../button/button.comopnent";
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
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
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
          <Button onClick={onClickHandler}>Ok</Button>
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
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            <GoogleLogo />
            Google auth
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
