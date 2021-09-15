import React,  {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom"
 import { BasicTable } from "../../Components/SingleInfo/BasicTable";
import { BasicInfo } from "../../Components/SingleInfo/BasicInfo";
import { getCandidates } from "../../Services/service";

// import { CandidateInfo } from "../../Components/SingleCandidateCard/CandidateInfo/CandidateInfo";

// import {Avatar} from './Avatar/Avatar';
// import {CandidateInfo} from './CandidateInfo/CandidateInfo';


export const SingleCandidate = () => {
    const [candidates, setCandidates] = useState([]);
    
  const params = useParams();
  const candidateId = params.candidateId




  useEffect(() => {
    getCandidates().then((candidates) => {
      console.log(candidates);
      setCandidates(candidates);
    });
  }, []);

  const candidate  = Array.isArray(candidates)&&candidates.filter((element) => {
      return element.id === parseInt(candidateId);
    })[0];


  return (
    <Fragment>
    { candidate ? <BasicInfo candidate={candidate}/> : null}  
    <BasicTable/>
    </Fragment>    
  );
};




     

