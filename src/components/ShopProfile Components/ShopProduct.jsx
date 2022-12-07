import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

function ShopProduct({ productData }) {
  return (
    <MDBCol md="6" lg="3" className="mb-4 ps-2">
      <MDBCard>
        <MDBCardImage
          src={productData.productPhoto}
          position="top"
          alt="Laptop"
        />
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p className="small">Duo to</p>
            <p className="small text-secondary">{productData.expirationDate}</p>
          </div>

          <div
            className="d-flex justify-content-between mb-3 align-items-center"
            style={{ minHeight: 60 }}
          >
            <h5 className="mb-0">{productData.productName}</h5>
            <h5 className="text-danger mb-0">{productData.productPrice}JD</h5>
          </div>

          <div class="d-flex justify-content-center mb-2">
            <MDBBtn outline className="mx-2" color="dark">
              Add To Cart
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ShopProduct;
