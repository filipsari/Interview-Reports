import React from "react";
import {Link} from 'react-router-dom';

import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <div className="mb-50">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Interview Report</a>

          {isLoggedIn && (
            
            <div className="d-flex">
              <Link to="/candidates" className="btn" >
                Candidates
             </Link>

              <button className="btn" type="text" onClick={() => localStorage.removeItem('accessToken')}>
                <i className="fas fa-sign-in-alt"></i> Log Out
              </button>
            </div>
          ) }
        </div>
      </nav>
    </div>
  );
}

export { Header };
