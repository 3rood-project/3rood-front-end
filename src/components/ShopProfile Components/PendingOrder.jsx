import React from "react";
import { MDBBtn, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function PendingOrder({ offerData }) {
  return (
    <>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-2">
        <div className="d-flex align-items-center">
          <div className="ms-3">
            <p className="fw-bold mb-1">
              <p className="mb-1">order ID: {offerData.order_id}</p>
              <p className="mb-1">
                Amount : <b>{offerData.total}</b>
              </p>
            </p>
            <p className="text-muted mb-0">
              Order From : {offerData.orderOwner}
            </p>
          </div>
        </div>
        <Link to={`/orderDetails/${offerData.order_id}`}>
          <MDBBtn size="sm" rounded color="link">
            View Details
          </MDBBtn>
        </Link>
        <div className="d-flex flex-column flex-md-row  justify-content-center ">
          <MDBBtn size="sm" rounded color="danger" className="ms-2 mt-2">
            Reject
          </MDBBtn>
          <MDBBtn size="sm" rounded color="success" className="ms-2 mt-2">
            Approve
          </MDBBtn>
        </div>
      </MDBListGroupItem>
    </>
  );
}
