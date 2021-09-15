import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CandidateInfo } from "../../Components/SingleCandidateCard/CandidateInfo/CandidateInfo";
import { getCandidates } from "../../Services/service";

import "./Candidates.css";

export const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getCandidates().then((candidates) => {
      console.log(candidates);
      setCandidates(candidates);
    });
  }, []);

  const onTyping = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    const filteredCandidates = candidates.filter((element) => {
      return element.name.includes(inputValue); 
    });
    setCandidates(filteredCandidates);
  };
  // const filteredCandidates = candidates.filter((c) => c.name === query);

  return (
    // ***************************************************************************************** */
    // This is Candidate search field *********************************************************
    // ***************************************************************************************** */
    <div>
      <nav class="navbar navbar-light bg-light navigate">
        <div class="container-fluid">
          <a href="#" class="navbar-brand" >Candidates</a>
          <form class="d-flex">
            <input
              value={inputValue}
              onChange={onTyping}
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={onSubmit}
              class="btn btn-outline-success"
              type="submit"
            >
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </button>
          </form>
        </div>
      </nav>

      <div className="card-group">
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
    </div>
  );
};
