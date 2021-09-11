
import React from "react";

import "./Header.css"

function Header() {
  return (
    <div className="mb-50">
     <nav className="navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand">Interview Report</a>
    <form className="d-flex">
    <button className="btn" type="text">Candidates</button>
    
    <button className="btn" type="text"><i className="fas fa-sign-in-alt"></i> Login</button>
    </form>
  </div>
</nav>
    </div>
  );
}

export { Header };

