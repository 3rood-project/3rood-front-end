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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useValidation from "../hooks/useValidation";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
function Register() {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    email: "",
    city: "",
    gender: "",
    phone_number: "",
    birthday: "",
  });
  const {
    NameValidation,
    emailValidation,
    passwordValidation,
    isNotEmptyValidation,
    phoneValidation,
    message,
    setMessage,
  } = useValidation();
  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/userRegister",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: userInfo,
  };
  const checkValidation = () => {
    NameValidation("first_name", userInfo.first_name);
    NameValidation("last_name", userInfo.last_name);
    emailValidation(userInfo.email);
    passwordValidation(userInfo.password, userInfo.password_confirmation);
    phoneValidation(userInfo.phone_number);
    isNotEmptyValidation("city", userInfo.city);
    isNotEmptyValidation("gender", userInfo.gender);
    isNotEmptyValidation("birthday", userInfo.birthday);
  };

  const handleOnChange = (e) => {
    setUserInfo((pervs) => ({ ...pervs, [e.target.name]: e.target.value }));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    checkValidation();

    if (
      NameValidation("first_name", userInfo.first_name) &&
      NameValidation("last_name", userInfo.last_name) &&
      emailValidation(userInfo.email) &&
      passwordValidation(userInfo.password, userInfo.password_confirmation) &&
      phoneValidation(userInfo.phone_number) &&
      isNotEmptyValidation("city", userInfo.city) &&
      isNotEmptyValidation("gender", userInfo.gender) &&
      isNotEmptyValidation("birthday", userInfo.birthday)
    ) {
      console.log("check ok");
      axios(config)
        .then(function (res) {
          if (
            signIn({
              token: res.data.token,
              expiresIn: 1000,
              tokenType: "Bearer",
              authState: {
                user: res.data.data.user,
                token: res.data.data.token,
                role: res.data.data.user.role,
              },
            })
          ) {
            return navigate("/userProfile");
          }
        })
        .catch(function (error) {
          console.log(error);
          setMessage({
            email: error.response.data.message,
          });
        });
    }
  };

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
        <div className="overlay">
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
            <form
              onSubmit={(e) => {
                handleRegister(e);
              }}
            >
              <MDBCard className="my-5">
                <MDBCardBody className="p-5">
                  <div className="text-center mb-5">
                    <img src={logo} height="60" alt="" loading="lazy" />
                  </div>
                  <MDBRow className="d-flex justify-content-between">
                    <div className="col-6 ">
                      <p className="text-danger m-0 small">
                        {message.first_name}
                      </p>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        name="first_name"
                        id="form1"
                        type="text"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <p className="text-danger m-0 small">
                        {message.last_name}
                      </p>

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        name="last_name"
                        id="form2"
                        type="text"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-12 ">
                      <p className="text-danger m-0 small">{message.email}</p>

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <p className="text-danger m-0 small">
                        {message.birthday}
                      </p>

                      <MDBInput
                        wrapperClass="mb-4"
                        label="birthday"
                        type="date"
                        name="birthday"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <p className="text-danger m-0 small">{message.gender}</p>

                      <select
                        name="gender"
                        className="form-select"
                        onChange={handleOnChange}
                      >
                        <option value="">gender</option>
                        <option value="male">male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <p className="text-danger m-0 small">{message.password}</p>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Confirm Password"
                        type="password"
                        name="password_confirmation"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <p className="text-danger m-0 small">{message.city}</p>

                      <MDBInput
                        wrapperClass="mb-4"
                        label="City"
                        type="text"
                        name="city"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-6 ">
                      <p className="text-danger m-0 small ">
                        {message.phone_number}
                      </p>

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        type="tel"
                        name="phone_number"
                        onChange={handleOnChange}
                      />
                    </div>
                  </MDBRow>

                  <MDBBtn className="w-100 mb-2" size="md" color="dark">
                    sign up
                  </MDBBtn>

                  <p className="text-center mb-1">or </p>
                  <MDBBtn
                    className="w-100 mb-2"
                    size="md"
                    color="dark"
                    onClick={(e) => {
                      handleRegister(e);
                    }}
                  >
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
