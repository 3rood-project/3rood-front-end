import React from "react";
import { MDBBtn, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

export default function PendingOrder() {
  return (
    <>
      <h3 className="my-4" style={{ color: " #ed2647", fontWeight: 600 }}>
        Pending Order
      </h3>
      <MDBListGroup>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
          <div className="d-flex align-items-center">
            <div className="ms-3">
              <p className="fw-bold mb-1">
                <p className="mb-1">order ID: 1</p>
                <p className="mb-1">
                  Amount : <b>30JD</b>
                </p>
              </p>
              <p className="text-muted mb-0">Order From : osama das</p>
            </div>
          </div>
          <MDBBtn size="sm" rounded color="link">
            View Details
          </MDBBtn>
          <div className="d-flex flex-column flex-md-row  justify-content-center ">
            <MDBBtn size="sm" rounded color="danger" className="ms-2 mt-2">
              Reject
            </MDBBtn>
            <MDBBtn size="sm" rounded color="success" className="ms-2 mt-2">
              Approve
            </MDBBtn>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
          <div className="d-flex align-items-center">
            <div className="ms-3">
              <p className="fw-bold mb-1">
                <p className="mb-1">order ID: 1</p>
                <p className="mb-1">
                  Amount : <b>30JD</b>
                </p>
              </p>
              <p className="text-muted mb-0">Order From : osama das</p>
            </div>
          </div>
          <MDBBtn size="sm" rounded color="link">
            View Details
          </MDBBtn>
          <div className="d-flex flex-column flex-md-row  justify-content-center ">
            <MDBBtn size="sm" rounded color="danger" className="ms-2 mt-2">
              Reject
            </MDBBtn>
            <MDBBtn size="sm" rounded color="success" className="ms-2 mt-2">
              Approve
            </MDBBtn>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
          <div className="d-flex align-items-center">
            <div className="ms-3">
              <p className="fw-bold mb-1">
                <p className="mb-1">order ID: 1</p>
                <p className="mb-1">
                  Amount : <b>30JD</b>
                </p>
              </p>
              <p className="text-muted mb-0">Order From : osama das</p>
            </div>
          </div>
          <MDBBtn size="sm" rounded color="link">
            View Details
          </MDBBtn>
          <div className="d-flex flex-column flex-md-row  justify-content-center ">
            <MDBBtn size="sm" rounded color="danger" className="ms-2 mt-2">
              Reject
            </MDBBtn>
            <MDBBtn size="sm" rounded color="success" className="ms-2 mt-2">
              Approve
            </MDBBtn>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
    </>
  );
}
