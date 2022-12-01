import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBListGroupItem,
  MDBListGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function OrderTable() {
  return (
    <MDBListGroup>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column flex-md-row  ">
            <p className="mb-1 ms-3">Shop name: 1</p>
            <p className="mb-1  ms-3">order ID: 1</p>
            <p className="mb-1  ms-3">
              Amount : <b>30JD</b>
            </p>

            <p className="text-muted mb-0  ms-3">order date :2022/11/3</p>
          </div>
        </div>
        <Link to="/orderDetails">
          <MDBBtn size="sm" rounded color="secondary">
            View Details
          </MDBBtn>
        </Link>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column flex-md-row  ">
            <p className="mb-1 ms-3">Shop name: 1</p>
            <p className="mb-1  ms-3">order ID: 1</p>
            <p className="mb-1  ms-3">
              Amount : <b>30JD</b>
            </p>

            <p className="text-muted mb-0  ms-3">order date :2022/11/3</p>
          </div>
        </div>
        <Link to="/orderDetails">
          <MDBBtn size="sm" rounded color="secondary">
            View Details
          </MDBBtn>
        </Link>
      </MDBListGroupItem>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column flex-md-row  ">
            <p className="mb-1 ms-3">Shop name: 1</p>
            <p className="mb-1  ms-3">order ID: 1</p>
            <p className="mb-1  ms-3">
              Amount : <b>30JD</b>
            </p>

            <p className="text-muted mb-0  ms-3">order date :2022/11/3</p>
          </div>
        </div>
        <Link to="/orderDetails">
          <MDBBtn size="sm" rounded color="secondary">
            View Details
          </MDBBtn>
        </Link>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}
