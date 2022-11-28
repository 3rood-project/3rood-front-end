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
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative"
        style={{
          backgroundImage:
            'URL("https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/small-business-searches-62bd9fe5c4d5d-sej-1520x800.png")',
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
        <MDBRow className="justify-content-between">
          <MDBCol
            md="5"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h2 className="text-white text-center" style={{ zIndex: 1 }}>
              You don’t need to have a 100 person company to develop that idea.{" "}
              <br />
              you need <b style={{ color: "#ed2647" }}>3rood</b>
            </h2>
          </MDBCol>
          <MDBCol md="5">
            <form>
              <MDBCard className="my-5">
                <MDBCardBody className="p-5">
                  <div className="text-center mb-5">
                    <img src={logo} height="40" alt="" loading="lazy" />
                  </div>
                  <MDBRow className="d-flex justify-content-between">
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Shop Name"
                        type="text"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput wrapperClass="mb-4" label="City" type="text" />
                    </div>
                    <div className="col-12 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        type="email"
                      />
                    </div>
                    <div className="col-12 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Address"
                        type="text"
                      />
                    </div>

                    <div className="col-6 ">
                      <select name="category" className="form-select">
                        <option value="Mart">Mart</option>
                        <option value="Food">Food</option>
                        <option value="Fashion">Fashion</option>
                      </select>
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        type="tel"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Open Time"
                        type="time"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Close Time"
                        type="time"
                      />
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
                    <div className="col-12 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Wallet Number"
                        type="tel"
                      />
                    </div>
                  </MDBRow>

                  <MDBBtn className="w-100 mb-2" size="md" color="dark">
                    sign up
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default JoinUs;
