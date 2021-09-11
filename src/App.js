import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "./Pages/Login/Login";
import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { SingleCandidateCard } from "./Components/SingleCandidateCard/SingleCandidateCard";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <Switch>
          <Route path="/single-candidate" component={SingleCandidateCard} />
        </Switch>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}

      <Footer />
    </Fragment>
  );
}

export default App;
