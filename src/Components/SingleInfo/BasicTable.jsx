import React from "react";
import { Table, Container } from "react-bootstrap";


export const BasicTable = () => {
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
          <tr>
            <td>Google</td>
            <td>20.12.2017</td>
            <td>Passed</td>
            <td><i class="fas fa-eye"></i></td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>20.12.2017</td>
            <td>Failed</td>
            <td><i class="fas fa-eye"></i></td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>20.12.2017</td>
            <td>Passed</td>
            <td><i class="fas fa-eye"></i></td>
          </tr>
          <tr>
            <td>LinkedLn</td>
            <td>20.12.2017</td>
            <td>Passed</td>
            <td><i class="fas fa-eye"></i></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};