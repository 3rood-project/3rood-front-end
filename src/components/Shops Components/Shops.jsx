import {
  MDBCardImage,
  MDBRipple,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export const Shops = () => {
  return (
    <>
      <MDBCol md="6" lg="3" className="mb-4 ps-2">
        <MDBCard>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom"
          >
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
              fluid
              className="w-100"
            />
            <Link>
              <div class="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </Link>
          </MDBRipple>
          <MDBCardBody className="text-center">
            <Link to="/shopProfile" className="text-reset">
              <h4
                className="card-title mb-3 text-capitalize"
                style={{ color: " #ed2647", fontWeight: 700 }}
              >
                shop name
              </h4>
            </Link>
            <p>Category</p>{" "}
            <Link to="/shopProfile">
              <MDBBtn className="mx-2" color="dark">
                Shop now
              </MDBBtn>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
};
