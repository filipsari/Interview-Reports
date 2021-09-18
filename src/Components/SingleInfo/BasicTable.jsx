import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";

import { getReports } from "../../Services/service";
import { ModalReport } from "../Modals/ModalReport";

export const BasicTable = ({ candidate }) => {
  const [reports, setReports] = useState([]);
  const [reportToShow, setReportToShow] = useState(null);

  useEffect(() => {
    getReports().then((reports) => {
      setReports(
        reports.filter((element) => element.candidateId === candidate.id)
      );
    });
  }, []);

  return (
    <Container>
      {!!reportToShow && (
        <ModalReport
          report={reportToShow}
          onHide={() => setReportToShow(null)}
        />
      )}
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
          {reports
            ? reports.map((element, index) => (
                <tr key={index}>
                  <td>{element.companyName}</td>
                  <td>{element.interviewDate}</td>
                  <td>{element.status}</td>
                  <td className="text-center">
                    <button
                      className="text-primary"
                      onClick={() => setReportToShow(element)}
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </Container>
  );
};
