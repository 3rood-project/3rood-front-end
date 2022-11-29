import React from "react";
import { MDBCol, MDBCardBody, MDBInput } from "mdb-react-ui-kit";

function ChangePassComp() {
  return (
    <>
      <MDBCol md="12">
        <div className="">
          <MDBCardBody className="p-5">
            <form>
              <MDBInput
                wrapperClass="mb-4"
                label="Current Password"
                type="password"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="New Password"
                type="password"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Confirm Password"
                type="password"
              />
            </form>
          </MDBCardBody>
        </div>
      </MDBCol>
    </>
  );
}

export default ChangePassComp;
