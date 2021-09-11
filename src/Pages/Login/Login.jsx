import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <form class="form1">
      <div class="main">
        <p class="sign" align="center">
          Sign in
        </p>

        <input class="un " type="email" align="center" placeholder="e-mail" />
        <input
          class="pass"
          type="password"
          align="center"
          placeholder="password"
        />
        <a class="submit" align="center">
          Sign in
        </a>
      </div>
    </form>
  );
};
