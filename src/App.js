import React, { Fragment } from "react";

import { Login } from "./Pages/Login/Login";

import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Fragment>

      <Login />

      <Header />
      <Footer />

    </Fragment>
  );
}

export default App;
