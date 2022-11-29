import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

export default function OrderDetails() {
  return (
    <>
      <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="10">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    Thanks for your Order,{" "}
                    <span style={{ color: " #ed2647" }}>Anna</span>!
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <MDBCard className="shadow-0 border mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="3">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="3"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted h5  mb-0">Product Name</p>
                        </MDBCol>

                        <MDBCol
                          md="3"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted  mb-0 ">Qty: 1</p>
                        </MDBCol>
                        <MDBCol
                          md="3"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted  mb-0 ">$499</p>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="3">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                            fluid
                            alt="Phone"
                          />
                        </MDBCol>
                        <MDBCol
                          md="3"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted h5  mb-0">Product Name</p>
                        </MDBCol>

                        <MDBCol
                          md="3"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted  mb-0 ">Qty: 1</p>
                        </MDBCol>
                        <MDBCol
                          md="3"
                          className="text-center d-flex justify-content-center align-items-center"
                        >
                          <p className="text-muted  mb-0 ">$499</p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Total</span> $898.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">
                      <b>order id:</b> 11
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Order status:</span> On
                      Delivery
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      <b>Order Date </b>: 22 Dec,2019
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Order From:</span> Shop
                      name
                    </p>
                  </div>

                  <div className="d-flex justify-content-between ">
                    <p className="text-muted mb-0">
                      <b> phone:</b> 0786238190
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span>{" "}
                      Free
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">
                      <b>Address Delivery:</b> new zarqa -36str
                    </p>
                  </div>
                </MDBCardBody>
                <MDBCardFooter
                  className="border-0 "
                  style={{
                    backgroundColor: " #ed2647",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    Total paid: <span className="h2 mb-0 ms-2">$1040</span>
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
