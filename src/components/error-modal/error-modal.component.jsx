import React, { useState } from "react";

import "../button/button.styles.scss";
import "./error-modal.scss";

const ErrorModal = (props) => {
  const [isOk, setIsOk] = useState(false);

  const onClickHandler = () => {
    setIsOk(true);

    setTimeout(() => setIsOk(false), 7000);
  };

  return (
    <div className={`modal ${isOk ? "hidden" : ""}`}>
      <h2>Something went wrong 🤷‍♀️</h2>
      <div className="message">{props.text}</div>
      <button className="button-container" onClick={onClickHandler}>
        OK
      </button>
    </div>
  );
};

export default ErrorModal;
