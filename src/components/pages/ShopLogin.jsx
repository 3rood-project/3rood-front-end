import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import logo from "../asset/BrandFiles/3rood-low-resolution-logo-color-on-transparent-background.png";

function ShopLogin() {
  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative"
        style={{
          backgroundImage:
            'URL("https://miro.medium.com/max/1000/0*sWMRrKgLhSoB5IRw.")',
          backgroundSize: "cover",
        }}
      >
        {" "}
        <div class="overlay">
          <div
            className="position-absolute "
            style={{
              backgroundColor: "#00000069",

              height: "100%",
              width: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          ></div>
        </div>
        <MDBRow className="justify-content-evenly">
          <MDBCol md="5">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <form>
                  <div className="text-center mb-5">
                    <img src={logo} height="60" alt="" loading="lazy" />
                    <h5 className="mt-4 m-0">Shop Login </h5>
                  </div>
                  <MDBInput wrapperClass="mb-4" label="Email" type="email" />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    type="password"
                  />

                  <MDBBtn
                    className="w-100 mb-2"
                    size="md"
                    color="dark"
                    type="submit"
                  >
                    Login
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default ShopLogin;
