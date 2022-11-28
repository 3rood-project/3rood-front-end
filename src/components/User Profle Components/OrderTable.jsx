import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function OrderTable() {
  return (
    <MDBTable hover className="bg-white rounded-5">
      <MDBTableHead>
        <tr>
          <th scope="col">order ID</th>
          <th scope="col">Shop name</th>
          <th scope="col">order Amount</th>
          <th scope="col">order date</th>
          <th scope="col">details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope="row">1</th>
          <td>zwahrah market</td>
          <td>2022/11/3</td>
          <td>30JD</td>
          <td>
            <Link to="/orderDetails">View</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>zwahrah market</td>
          <td>2022/11/3</td>
          <td>30JD</td>
          <td>
            <Link>View</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>zwahrah market</td>
          <td>2022/11/3</td>
          <td>30JD</td>
          <td>
            <Link>View</Link>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}
