import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "./Pages/Login/Login";
import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { SingleCandidate } from "./Pages/SingleCandidate/SingleCandidate";
import { Candidates } from "./Pages/Candidates/Candidates";
import { getCandidates } from "./Services/service";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidates().then((candidates) => {
      console.log(candidates);
      setCandidates(candidates);
    });
  }, []);


  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <Switch>
          <Route path="/single-candidate" component={SingleCandidate} />
          <Route path="/candidates" component={  () => <Candidates ourData={candidates}/>} />
        </Switch>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
       

      <Footer />
    </Fragment>
  );
}

export default App;
