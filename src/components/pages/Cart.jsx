/* eslint-disable jsx-a11y/alt-text */
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export function Cart() {
  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - 2 items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleTag="div"
                      rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        className="w-100"
                      />
                    </MDBRipple>
                  </MDBCol>

                  <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                    <p>
                      <strong>Product Name </strong>
                    </p>
                    <p>
                      <strong>$17.99</strong>
                    </p>

                    <MDBTooltip
                      wrapperProps={{ size: "sm" }}
                      wrapperClass="me-1 mb-2 bg-danger"
                      title="Remove item"
                    >
                      <MDBIcon fas icon="trash" />
                    </MDBTooltip>
                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <MDBBtn className="px-3 me-2 bg-dark">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        defaultValue={1}
                        min={0}
                        type="number"
                        label="Quantity"
                        name="Quantity"
                      />

                      <MDBBtn className="px-3 ms-2 bg-dark" onClick={() => {}}>
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>

                <hr className="my-4" />

                <MDBRow>
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0 ">
                    <MDBRipple
                      rippleTag="div"
                      rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                        className="w-100"
                      />
                    </MDBRipple>
                  </MDBCol>

                  <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                    <p>
                      <strong>Product Name </strong>
                    </p>
                    <p>
                      <strong>$17.99</strong>
                    </p>

                    <MDBTooltip
                      wrapperProps={{ size: "sm" }}
                      wrapperClass="me-1 mb-2 bg-danger"
                      title="Remove item"
                    >
                      <MDBIcon fas icon="trash" />
                    </MDBTooltip>
                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <MDBBtn className="px-3 me-2 bg-dark">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        defaultValue={1}
                        min={0}
                        type="number"
                        label="Quantity"
                        name="Quantity"
                      />

                      <MDBBtn className="px-3 ms-2 bg-dark" onClick={() => {}}>
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
                    Delivery
                    <span>$2</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>$55.98</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <Link to="/checkout">
                  {" "}
                  <MDBBtn block size="lg" color="dark">
                    Go to checkout
                  </MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
