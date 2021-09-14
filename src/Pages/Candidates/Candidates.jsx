import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CandidateInfo } from "../../Components/SingleCandidateCard/CandidateInfo/CandidateInfo";
import { getCandidates } from "../../Services/service";

import "./Candidates.css";

export const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [query, setQuery] = useState('');


  useEffect(() => {
    getCandidates().then((candidates) => {
      console.log(candidates);
      setCandidates(candidates);
    });
  }, []);

  const filteredCandidates = candidates.filter((c) => c.name === query);

  return (
    <div className="card-group">
      <input type="text" />
      {candidates.map((element) => (
        <div className="card ourCard" style={{ width: "18rem" }}>
          <Link to="/single-candidate">
            <img
              src="https://image.shutterstock.com/image-vector/profile-photo-vector-placeholder-pic-600w-535853263.jpg"
              className="card-img-top"
              alt="..."
            />
            <CandidateInfo name={element.name} email={element.email} />
          </Link>
        </div>
      ))}
    </div>
  );
};
