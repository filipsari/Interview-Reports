import React, { Fragment, useState } from "react";

import { Login } from "./Pages/Login/Login";

import { Header } from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
//   const [email, setEmail] = useState ('');
//   const [password, setPassword] = useState ('');
//   const [token, setToken] = useState(null);

//   const login = (event) => {
//     event.preventDefault();
 
//   console.log(email);

//   const loginData = {
//     email: email,
//     password: password
//   }

// fetch('http://localhost:3333/login' , {
//   method: 'POST',
//   body: JSON.stringify(loginData)
//    })
//  }






  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} />
      {
        isLoggedIn
        ? <h1>USER LOGGEDIN</h1>
        : <Login onLogin={setIsLoggedIn} />
      }

      
      <Footer />

    </Fragment>
  );
}

export default App;
