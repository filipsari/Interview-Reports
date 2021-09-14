import React,  {Fragment} from "react";
 import { BasicTable } from "../../Components/SingleInfo/BasicTable";
import { BasicInfo } from "../../Components/SingleInfo/BasicInfo";
import { CandidateInfo } from "../../Components/SingleCandidateCard/CandidateInfo/CandidateInfo";

// import {Avatar} from './Avatar/Avatar';
// import {CandidateInfo} from './CandidateInfo/CandidateInfo';


export const SingleCandidate = () => {
  return (
    <Fragment>
    <BasicInfo/>
    <BasicTable/>
    </Fragment>    
  );
};




     

