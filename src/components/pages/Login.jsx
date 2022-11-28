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
} from "mdb-react-ui-kit";
import logo from "../asset/BrandFiles/3rood-low-resolution-logo-color-on-transparent-background.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative"
        style={{
          backgroundImage:
            'URL("https://media.istockphoto.com/id/669966070/photo/sale-background.jpg?s=170667a&w=0&k=20&c=U79_-Jv3FQ2tqnfhNWl7ymncQq0VyZtANBxtbEn3lVw=")',
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
        <MDBRow
          className="justify-content-end
        "
        >
          <MDBCol md="4">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <div className="text-center mb-3">
                  <img src={logo} height="60" alt="" loading="lazy" />
                  <h5 className="mt-3 m-0">welcome agin </h5>
                </div>
                <MDBInput wrapperClass="mb-4" label="Email" type="email" />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                />

                <MDBBtn className="w-100 mb-2" size="md" color="dark">
                  Login
                </MDBBtn>

                <p className="text-center mb-1">or </p>
                <MDBBtn className="w-100 mb-2" size="md" color="dark">
                  Login with <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
                <div className="text-center mt-4">
                  you don't have account ?<Link to="/register">Register</Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;
