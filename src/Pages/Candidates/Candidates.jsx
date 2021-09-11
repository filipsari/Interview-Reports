import React from "react";
import { Link } from "react-router-dom";

import "./Candidates.css";

export const Candidates = (ourData) => {
  return (
    <div className="card-group">
      {ourData.map((element) => (
        <div className="card ourCard" style={{ width: "18rem" }}>
          <Link to="/single-candidate">
            <img src={element.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {element.name}</h5>
              <p className="card-text">{element.email}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
