import React from "react";

import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <div className="mb-50">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Interview Report</a>

          {isLoggedIn ? (
            <form className="d-flex">
              <button className="btn" type="text">
                Candidates
              </button>

              <button className="btn" type="text" onClick={() => localStorage.removeItem('accessToken')}>
                <i className="fas fa-sign-in-alt"></i> Log Out
              </button>
            </form>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
}

export { Header };
