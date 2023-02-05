import React from "react";
import { Link } from "react-router-dom";
import food from "../asset/food-photo.jpeg";
import mart from "../asset/mart.jpg";
import usedItem from "../asset/usedItem.jpg";

export const Categories = () => {
  return (
    <div
      className="row mb-3 mx-0 justify-content-evenly position-relative"
      style={{ top: -100 }}
    >
      <div className="col-lg-4 col-md-6 col-6 mb-4 mb-lg-0">
        <div className="featured-block d-flex justify-content-center align-items-center hover-zoom">
          <Link className="d-block" to="/shops?category=food">
            <img
              src={food}
              className="featured-block-image img-fluid rounded-5"
              alt=""
              width="300px"
            />

            <h4
              className="featured-block-text text-center mt-3"
              style={{ color: " #ed2647" }}
            >
              <strong>Food</strong> Offers
            </h4>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-6 mb-4 mb-lg-0">
        <div className="featured-block d-flex justify-content-center align-items-center hover-zoom">
          <Link className="d-block" to="/shops?category=Mart">
            <img
              src={mart}
              width="300px"
              className="featured-block-image img-fluid rounded-5"
              alt=""
            />

            <h4
              className="featured-block-text text-center mt-3"
              style={{ color: " #ed2647" }}
            >
              <strong>Mart</strong> Offers
            </h4>
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-6 mb-4 mb-lg-0">
        <div className="featured-block d-flex justify-content-center align-items-center hover-zoom">
          <Link className="d-block" to="/shops?category=Used Item">
            <img
              src={usedItem}
              className="featured-block-image img-fluid rounded-5"
              alt=""
              width="300px"
            />

            <h4
              className="featured-block-text text-center mt-3"
              style={{ color: " #ed2647" }}
            >
              <strong>Used Item</strong> Offers
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
