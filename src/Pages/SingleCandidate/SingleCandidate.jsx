import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasicTable } from "../../Components/SingleInfo/BasicTable";
import { BasicInfo } from "../../Components/SingleInfo/BasicInfo";
import { getCandidates } from "../../Services/service";

export const SingleCandidate = () => {
  const [candidates, setCandidates] = useState([]);

  const candidateId = useParams().candidateId; // objekat key:vaule

  console.log(`candidate ${candidateId}`);

  useEffect(() => {
    getCandidates().then((candidates) => {
      console.log(candidates);
      setCandidates(candidates);
    });
  }, []);
  // Array.isArray(candidates)&&

  const candidate = candidates.filter((element) => {
    return element.id === parseInt(candidateId); // single-candidate/84815318  ----> 84815318
  })[0];

  console.log(`OVO JE PROVERA: ${candidate}`);

  return (
    <Fragment>
      {candidate ? <BasicInfo candidate={candidate} /> : null}
      {candidate ? <BasicTable candidate={candidate} /> : null}
    </Fragment>
  );
};
