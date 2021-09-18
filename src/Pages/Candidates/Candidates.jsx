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
      return element.name.toLowerCase().includes(inputValue.toLowerCase()); // 3 funcije 1) map svi elementi 2) filter suzeni broj elementata vraca true ili false  3) reduce- kombinaciju prve dve 
    });
    setCandidates(filteredCandidates);
  };

const onFormSubmit = (event) => {
   event.preventDefault();
   onSubmit();
}

  // const filteredCandidates = candidates.filter((c) => c.name === query);

  return (
    // ***************************************************************************************** */
    // This is Candidate search field *********************************************************
    // ***************************************************************************************** onSubimt */
    <div>
      <nav className="navbar navbar-light bg-light navigate">
        <div className="container-fluid">
          <a href="#" class="navbar-brand" >Candidates</a>
          <form onChange={onFormSubmit} className="d-flex">   
            <input
              value={inputValue}
              onChange={onTyping}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button
              class="btn btn-outline-success"
              type="submit"> //automatski poziva submit button */}
            
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            {/* </button> */}
          </form>
        </div>
      </nav>



      <div className="card-group">
        {candidates.map((element, key) => (
          <div className="card ourCard" key={key} style={{ width: "18rem" }}>
            <Link to={`/single-candidate/${element.id}`}> 
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOC9cG-RnDhS3DALFlKk13uBjUOYTQ6x0P1A&usqp=CAU"
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
