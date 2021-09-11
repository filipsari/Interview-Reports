import React from "react";
import { Link } from "react-router-dom";
import "./Candidates.css";

export const Candidates = () => {
  return (
    <div className="card-group">
      <div className="card ourCard" style={{ width: "18rem" }}>
        <Link to="/single-candidate">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGt7TG8kXqnIbTMF849l4Iyfa8tABT6RTEQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">First Card</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </Link>
      </div>

      <div className="card ourCard" style={{ width: "18rem" }}>
        <Link to="/single-candidate">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGt7TG8kXqnIbTMF849l4Iyfa8tABT6RTEQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Second Card</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>{" "}
        </Link>
      </div>

      <div className="card ourCard " style={{ width: "18rem" }}>
        <Link to="/single-candidate">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGt7TG8kXqnIbTMF849l4Iyfa8tABT6RTEQ&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">third Card</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};
