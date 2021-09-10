import React from "react";

import "./Header.css"

function Header() {
  return (
    <div className="mb-50">
     <nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand">Interview Report</a>
    <form class="d-flex">
    <button class="btn" type="text">Candidates</button>
    
    <button class="btn" type="text"><i class="fas fa-sign-in-alt"></i> Login</button>
    </form>
  </div>
</nav>
    </div>
  );
}

export { Header };