import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import PillsForShop from "../ShopProfile Components/PillsForShop";
import AddOffer from "../ShopProfile Components/AddOffer";
import ChangePass from "../User Profle Components/ChangePass";
export function ShopOwner() {
  const [staticModal, setStaticModal] = useState(false);
  const [staticModal2, setStaticModal2] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
  const toggleShow2 = () => setStaticModal2(!staticModal2);
  return (
    <div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="12" xl="12">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row position-relative"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div className="position-absolute top-0 end-0 mt-3 me-3">
                  <MDBBtn color="light" onClick={toggleShow2}>
                    <MDBIcon fas icon="cog" /> Change Pass
                  </MDBBtn>

                  <ChangePass
                    setStaticModal={setStaticModal2}
                    staticModal={staticModal2}
                    toggleShow={toggleShow2}
                  />
                </div>
                <div
                  className="ms-md-4 mt-md-5 ms-1 d-flex flex-column"
                  style={{ width: "200px" }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "200px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-4" style={{ marginTop: "100px" }}>
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
                    <MDBCardText className="mb-1 h5 ">City</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Zarqa
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
              <div className="d-flex justify-content-end mt-4 me-4 mb-0">
                <MDBBtn color="dark" className="ms-1" onClick={toggleShow}>
                  <MDBIcon fas icon="plus" />
                  Add offer
                </MDBBtn>

                <AddOffer
                  setStaticModal={setStaticModal}
                  staticModal={staticModal}
                  toggleShow={toggleShow}
                />
              </div>
              <MDBCardBody className="text-black p-4 mt-4">
                <PillsForShop />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
