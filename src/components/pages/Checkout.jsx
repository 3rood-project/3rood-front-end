import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRadio,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

export function Checkout() {
  return (
    <MDBContainer className="my-5 py-5" style={{ maxWidth: "1100px" }}>
      <section>
        <MDBRow>
          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography
                  tag="h5"
                  className="mb-0 text-font text-capitalize"
                >
                  Delivery address
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="Full name" type="text" />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Phone" type="tel" />
                  </MDBCol>
                </MDBRow>

                <MDBInput label="City" type="text" className="mb-4" />
                <MDBInput label="Address" type="text" className="mb-4" />
                <MDBInput label="Email" type="text" className="mb-4" />
                <MDBTextArea
                  label="Additional information"
                  rows={4}
                  className="mb-4"
                />
              </MDBCardBody>
            </MDBCard>
            <div>
              <h3>Payment method</h3>
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="VISA"
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Cash on Delivery"
                required
                c
              />
            </div>
          </MDBCol>

          <MDBCol md="4" className="mb-4 position-statics">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font">
                  1 item
                  <span className="float-end mt-1" style={{ fontSize: "13px" }}>
                    Edit
                  </span>
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="d-flex justify-content-around mt-3">
                  <MDBCol md="5">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="rounded-3"
                      style={{ minWidth: "100px", maxWidth: "100%" }}
                      alt="Blue Jeans Jacket"
                    />
                  </MDBCol>
                  <MDBCol md="5" className="ms-3 mt-3">
                    <p className="mb-1 text-descriptions">Product Name </p>
                    <span className="mb-2 text-price">$35.00</span>

                    <p className="text-descriptions mt-0">Qty:1</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-around mt-3">
                  <MDBCol md="5">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="rounded-3"
                      style={{ minWidth: "100px", maxWidth: "100%" }}
                      alt="Blue Jeans Jacket"
                    />
                  </MDBCol>
                  <MDBCol md="5" className="ms-3 mt-3">
                    <p className="mb-1 text-descriptions">Product Name </p>
                    <span className="mb-2 text-price">$35.00</span>

                    <p className="text-descriptions mt-0">Qty:1</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter className="mt-4">
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                    Subtotal
                    <span>$35.00</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                    Delivery
                    <span>$2.00</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 fw-bold text-uppercase">
                    Total to pay
                    <span>$37.00</span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardFooter>
            </MDBCard>
            <div className="text-center">
              <MDBBtn className="button-order col-md-12 bg-dark">
                Place order
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
