import React, {useState, useEffect} from "react";
import { Table, Container } from "react-bootstrap";

import { getReports } from "../../Services/service";



export const BasicTable = ({candidate}) => {

  const [reports,setReports] =useState([]);


  useEffect(() =>{
    getReports().then((reports) =>{
      setReports(reports.filter( element => element.candidateId === candidate.id))
    });
  }, []);

  console.log(reports)

  
  
  // if(parseInt(reports.candidateId) === candidate)



  return (
<Container>

      <h3 className="mt-4 mb-3">Reports:</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company</th>
            <th>Interview date</th>
            <th colSpan="2">Status</th>
          </tr>
        </thead>
        <tbody>
        {reports ? reports.map((element, index) => (
          <tr key={index}>
            <td>{element.companyName}</td>
            <td>{element.interviewDate}</td>
            <td>{element.status}</td>
            <td><i class="fas fa-eye"></i></td>
          </tr>
        )) : null }
        </tbody>
      </Table>
      
    </Container>
  );
};