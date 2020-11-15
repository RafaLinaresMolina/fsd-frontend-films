import React, { useState } from "react";
import "../../containers/Login/Login.scss";
import "../../containers/Register/Register.scss";
import "./HeaderComponent.scss";

function HeaderComponent(props) {

  return (
      <div className="container">
        <div className="logoContainer">
          <div className="logo">
            <h1> GEEKFLIX</h1>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="buttonElement">
            <h2>FILMS</h2>
          </div>
          <div className="buttonElement">
            <h2>PROFILE</h2>
          </div>
        </div>
      </div>
  );
}

export default HeaderComponent;