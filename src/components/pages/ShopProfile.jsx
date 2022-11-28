import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import ShopProduct from "../ShopProfile Components/ShopProduct";

export function ShopProfile() {
  return (
    <div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" xl="12">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-md-4 mt-md-5 d-flex flex-column"
                  style={{ width: "250px" }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "250px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-4" style={{ marginTop: "110px" }}>
                  <MDBTypography tag="h2" style={{ color: " #ed2647" }}>
                    Shop Name
                  </MDBTypography>
                  <MDBCardText tag="h5">category</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1 pt-4 pt-md-0">
                  <div className="me-4">
                    <MDBCardText className="mb-1 h5 ">city</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      zarqa
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5 text-success">
                      Open
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      8:00AM - 10:00PM
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4 mt-5">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <MDBCardText className="lead fw-normal mb-0">
                    <b>Active Offers</b>
                  </MDBCardText>
                </div>
                <hr className="mt-0" />
                <MDBRow className="g-0 justify-content-start align-items-start ">
                  <ShopProduct />
                  <ShopProduct />
                  <ShopProduct />
                  <ShopProduct />
                  <ShopProduct />
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
