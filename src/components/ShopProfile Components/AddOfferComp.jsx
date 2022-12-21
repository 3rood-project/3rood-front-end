import React, { useState } from "react";
import { MDBCol, MDBCardBody, MDBInput, MDBTextArea } from "mdb-react-ui-kit";

function AddOfferComp({ message, handleChange, offerData }) {
  return (
    <>
      <MDBCol md="12">
        <div className="">
          <MDBCardBody className="p-5">
            <p className="text-danger m-0 small">{message?.product_name}</p>
            <MDBInput
              wrapperClass="mb-4"
              label="Product Name"
              name="product_name"
              type="text"
              value={offerData?.product_name}
              onChange={handleChange}
            />
            <div className="d-flex">
              <div className="col-6">
                <p className="text-danger m-0 small">
                  {message?.product_price}
                </p>
                <MDBInput
                  wrapperClass="mb-4 "
                  label="Price"
                  name="product_price"
                  type="number"
                  value={offerData?.product_price}
                  min={0}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <p className="text-danger m-0 small">
                  {message?.expiration_date}
                </p>
                <MDBInput
                  wrapperClass="mb-4 ms-2"
                  label="Duo to"
                  type="date"
                  value={offerData?.expiration_date}
                  name="expiration_date"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="col-6">
                <p className="text-danger m-0 small">
                  {message?.product_Quantity}
                </p>
                <MDBInput
                  wrapperClass="mb-4 "
                  label="Quantity"
                  type="number"
                  value={offerData?.product_Quantity}
                  name="product_Quantity"
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <p className="text-danger m-0 small">{message?.product_tag}</p>
                <MDBInput
                  wrapperClass="mb-4 ms-2"
                  label="product Tag"
                  type="text"
                  value={offerData?.product_tag}
                  name="product_tag"
                  onChange={handleChange}
                />
              </div>
            </div>
            <span>Product photo</span>
            <p className="text-danger m-0 small">{message?.product_image}</p>
            <MDBInput
              wrapperClass="mb-4"
              type="file"
              value={offerData?.product_image}
              name="product_image"
              onChange={handleChange}
            />
            <p className="text-danger m-0 small">
              {message?.product_description}
            </p>
            <MDBTextArea
              label="Description"
              id="textAreaExample"
              rows={4}
              value={offerData?.product_description}
              name="product_description"
              onChange={handleChange}
            />
          </MDBCardBody>
        </div>
      </MDBCol>
    </>
  );
}

export default AddOfferComp;
