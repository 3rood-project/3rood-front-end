import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBSelect,
} from "mdb-react-ui-kit";
import logo from "../asset/BrandFiles/3rood-low-resolution-logo-color-on-transparent-background.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative"
        style={{
          backgroundImage:
            'URL("https://torange.biz/photofxnew/196/HD/best-background-template-discount-offer-sale-196639.jpg")',
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
        <MDBRow className="justify-content-around">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <div
              style={{ backgroundColor: "#0000008f", zIndex: 1 }}
              className="rounded-5 text-center"
            >
              <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
                The best offer for you
              </h1>
              <h3 className="text-light ">
                Join Us and Enjoy with a lot of offers
              </h3>
            </div>
          </MDBCol>
          <MDBCol md="5">
            <form>
              <MDBCard className="my-5">
                <MDBCardBody className="p-5">
                  <div className="text-center mb-5">
                    <img src={logo} height="60" alt="" loading="lazy" />
                  </div>
                  <MDBRow className="d-flex justify-content-between">
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        id="form1"
                        type="text"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        id="form2"
                        type="text"
                      />
                    </div>
                    <div className="col-12 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        type="email"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="birthday"
                        type="date"
                      />
                    </div>
                    <div className="col-6 ">
                      <select name="Gender" className="form-select">
                        <option value="male">male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        type="password"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Confirm Password"
                        type="password"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput wrapperClass="mb-4" label="City" type="text" />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        type="tel"
                      />
                    </div>
                  </MDBRow>

                  <MDBBtn className="w-100 mb-2" size="md" color="dark">
                    sign up
                  </MDBBtn>

                  <p className="text-center mb-1">or </p>
                  <MDBBtn className="w-100 mb-2" size="md" color="dark">
                    sign up with <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                  <div className="text-center mt-4">
                    do you have account ?<Link to="/login">Login</Link>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Register;
