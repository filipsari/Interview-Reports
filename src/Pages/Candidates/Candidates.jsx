import React from "react";
import { Link } from "react-router-dom";
import { CandidateInfo } from "../../Components/SingleCandidateCard/CandidateInfo/CandidateInfo";
import "./Candidates.css";

export const Candidates = ({ourData}) => {
  console.log(ourData);

  return (
    <div className="card-group">
      {ourData.map((element) => (
        <div className="card ourCard" style={{ width: "18rem" }}>
          <Link to="/single-candidate">
            <img src={element.avatar} className="card-img-top" alt="..." />
             <CandidateInfo name={element.name} email={element.email}/>
          </Link>
        </div>
      ))}
    </div>
  );
};
