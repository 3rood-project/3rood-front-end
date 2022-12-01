import React, { useState } from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import EditOffer from "./EditOffer";

function OfferForShop() {
  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
  return (
    <MDBCol md="6" lg="3" className="mb-4 ps-2">
      <MDBCard>
        <MDBCardImage
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
          position="top"
          alt="Laptop"
        />
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p className="small">Duo to</p>
            <p className="small text-secondary">2022-12-27</p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">HP Notebook</h5>
            <h5 className="text-danger mb-0">$999</h5>
          </div>

          <div class="d-flex justify-content-center mb-2">
            <MDBBtn outline className="mx-2" color="danger">
              <MDBIcon fas icon="trash" />
              delete
            </MDBBtn>
            <MDBBtn color="dark" className="ms-1" onClick={toggleShow}>
              <MDBIcon fas icon="edit" />
              Edit
            </MDBBtn>
          </div>
          <EditOffer
            setStaticModal={setStaticModal}
            staticModal={staticModal}
            toggleShow={toggleShow}
          />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default OfferForShop;
