import React, { useState } from "react";
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
} from "mdb-react-ui-kit";
import OrderTable from "../User Profle Components/OrderTable";
import { Link } from "react-router-dom";
import ChangePass from "../User Profle Components/ChangePass";

export default function UserProfile() {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
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
                  Osama Dasooky
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
                    <MDBCardText className="text-muted">Johnatan</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Last Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      example@example.com
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">0786238190</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">male</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Birthday</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">1-6-1999</MDBCardText>
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
