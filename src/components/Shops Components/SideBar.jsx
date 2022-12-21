import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBRadio,
  MDBInput,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Shops } from "./Shops";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllShops } from "../../redusers/AllShopsReducer";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { allShops, isLoading } = useSelector((state) => state.shops);

  useEffect(() => {
    if (allShops.length === 0) {
      dispatch(fetchAllShops());
    }
  }, []);
  console.log(allShops, isLoading);
  if (isLoading) {
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
    <>
      <MDBRow className="g-0 justify-content-between align-items-start">
        <MDBCol className="col-4 col-md-2 mt-5">
          <div className="d-flex mb-3 mx-md-3">
            <MDBInput label="Search" />
          </div>
          <h4
            className="text-center mb-3"
            style={{ color: " #ed2647", fontWeight: 700 }}
          >
            Categories
          </h4>
          <div className="ms-md-4">
            <MDBRadio
              btn
              btnColor="light"
              id="btn-radio1"
              name="category"
              wrapperTag="div"
              wrapperClass="mx-2 my-2"
              label="All"
              defaultChecked
            />
            <MDBRadio
              btn
              btnColor="light"
              id="btn-radio2"
              name="category"
              wrapperTag="div"
              label="Food"
              wrapperClass="mx-2 my-2"
            />
            <MDBRadio
              btn
              btnColor="light"
              id="btn-radio3"
              name="category"
              wrapperClass="mx-2 my-2"
              wrapperTag="div"
              label="Mart"
            />
            <MDBRadio
              btn
              btnColor="light"
              id="btn-radio34"
              name="category"
              wrapperTag="div"
              label="Fashion"
              wrapperClass="mx-2 my-2"
              onChange={(e) => {
                console.log(e.target.labels[0].innerHTML);
              }}
            />
          </div>
        </MDBCol>
        <MDBCol className="col-8 col-md-10 mt-5 px-4 pt-4">
          <MDBRow className="g-0 justify-content-evenly align-items-center g-2">
            {allShops?.map((shop) => {
              return <Shops shopData={shop} key={shop.shopName} />;
            })}
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </>
  );
};
