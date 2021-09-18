import React from "react";
import { Container, Row, Modal, Col } from "react-bootstrap";

export const ModalReport = ({ report, onHide }) => {
  console.log("From Modal: ", report);

  return (
    <Modal
      show={!!report}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {report.candidateName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <p>Company</p>
              <p>{report.companyName}</p>
              <p>Interview Date</p>
              <p>{report.interviewDate}</p>
              <p>Phase</p>
              <p>{report.phase}</p>
              <p>Status</p>
              <p>{report.status}</p>
            </Col>

            <Col xs={12} md={8}>
              <p>Notes</p>
              <p>{report.note}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
