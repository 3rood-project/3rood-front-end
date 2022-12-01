import React from "react";
import { MDBCol, MDBCardBody, MDBInput, MDBTextArea } from "mdb-react-ui-kit";

function AddOfferComp() {
  return (
    <>
      <MDBCol md="12">
        <div className="">
          <MDBCardBody className="p-5">
            <form>
              <MDBInput wrapperClass="mb-4" label="Product Name" type="text" />
              <div className="d-flex">
                <div className="col-6">
                  <MDBInput
                    wrapperClass="mb-4 "
                    label="Price"
                    type="number"
                    min={0}
                  />
                </div>
                <div className="col-6">
                  <MDBInput
                    wrapperClass="mb-4 ms-2"
                    label="Duo to"
                    type="date"
                  />
                </div>
              </div>
              <span>Product photo</span>
              <MDBInput wrapperClass="mb-4" type="file" />
              <MDBTextArea label="Description" id="textAreaExample" rows={4} />
            </form>
          </MDBCardBody>
        </div>
      </MDBCol>
    </>
  );
}

export default AddOfferComp;
