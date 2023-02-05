import React from "react";
import box from "../asset/feature-bg.jpg";
export const About = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-7">
          <div className="featured-text">
            <h2 className="pb-3">
              Why <span className="text-danger bold">3rood</span>
            </h2>
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                <div className="list-box d-flex">
                  <div className="text-danger">
                    <i
                      className="fas fa-shipping-fast mx-3 my-0"
                      style={{ fontSize: 30 }}
                    />
                  </div>
                  <div className="content">
                    <h3>Home Delivery</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                <div className="list-box d-flex">
                  <div className="text-danger">
                    <i
                      className="fas fa-money-bill-alt mx-3 my-0"
                      style={{ fontSize: 30 }}
                    />
                  </div>
                  <div className="content">
                    <h3>Best Price</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                <div className="list-box d-flex">
                  <div className="text-danger">
                    <i
                      className="fas fa-briefcase mx-3 my-0"
                      style={{ fontSize: 30 }}
                    />
                  </div>
                  <div className="content">
                    <h3>Custom Box</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="list-box d-flex align-content-center">
                  <div className="text-danger ">
                    <i
                      className="fas fa-sync-alt mx-3 my-0"
                      style={{ fontSize: 30 }}
                    />
                  </div>
                  <div className="content">
                    <h3>Quick Refund</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 text-center">
          <img
            src={box}
            alt=""
            className="rounded-5 m-3"
            style={{ maxWidth: "100%", width: 550 }}
          />
        </div>
      </div>
    </div>
  );
};
