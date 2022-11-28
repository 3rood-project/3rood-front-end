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
      <MDBCol className="mb-4 col-12 col-md-3 ms-1">
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
            <Link className="text-reset">
              <h4
                className="card-title mb-3 text-capitalize"
                style={{ color: " #ed2647", fontWeight: 700 }}
              >
                shop name
              </h4>
            </Link>
            <p>Category</p>{" "}
            <MDBBtn className="mx-2" color="dark">
              Shop now
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
};
