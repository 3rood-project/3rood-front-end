import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import OrderTable from "../User Profle Components/OrderTable";
import { Link } from "react-router-dom";
import ChangePass from "../User Profle Components/ChangePass";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import { saveData } from "../../redusers/UserData";
import { useDispatch, useSelector } from "react-redux";

export default function UserProfile() {
  const [staticModal, setStaticModal] = useState(false);
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);

  const toggleShow = () => setStaticModal(!staticModal);
  const data = new FormData();
  const config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/profile",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${auth().token}`,
    },
    data: data,
  };
  const fetchUserData = () => {
    axios(config)
      .then(function (res) {
        dispatch(saveData(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  if (userData == "") {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <MDBSpinner role="status " style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  }
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle mb-3"
                  style={{ width: "200px" }}
                  fluid
                />
                <p className="h4 mb-3" style={{ color: " #ed2647" }}>
                  {userData.userInfo.firstName} {userData.userInfo.lastName}
                </p>
                <div className="d-flex justify-content-center mb-2">
                  <Link to="edit">
                    <MDBBtn outline color="dark" className="ms-1">
                      <MDBIcon fas icon="edit" />
                      edit Profile
                    </MDBBtn>
                  </Link>
                  <Link to="changePass">
                    <MDBBtn
                      outline
                      color="dark"
                      className="ms-1"
                      onClick={toggleShow}
                    >
                      <MDBIcon fas icon="cog" /> Change Password
                    </MDBBtn>
                  </Link>
                  <ChangePass
                    setStaticModal={setStaticModal}
                    staticModal={staticModal}
                    toggleShow={toggleShow}
                  />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>First Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.userInfo.firstName}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.userInfo.lastName}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.userInfo.userEmail}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.userInfo.phoneNumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.userInfo.gender}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <h3>Order History</h3>
        <MDBRow>
          <OrderTable />
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
