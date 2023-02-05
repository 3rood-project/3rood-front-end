import axios from "axios";
import { MDBCardImage } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { alert } from "../../redusers/CartReduser";
import useValidation from "../hooks/useValidation";
export const Contact = () => {
  const { isNotEmptyValidation, emailValidation, message } = useValidation();
  const [contentObj, setContentObj] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleChange = (e) => {
    setContentObj((pervs) => ({ ...pervs, [e.target.name]: e.target.value }));
  };
  const checkValidation = () => {
    let fname = isNotEmptyValidation("name", contentObj.name);
    let lname = isNotEmptyValidation("message", contentObj.message);
    let email = emailValidation(contentObj.email);

    if (fname && lname && email) return true;
    else return false;
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      axios
        .post("http://127.0.0.1:8000/api/contact", contentObj)
        .then((res) => {
          alert("Thank you, your message has been sent successfully");
          setContentObj({ email: "", name: "", message: "" });
        });
    }
  };
  return (
    <>
      <div className="container my-5 row mx-auto">
        <h3 className="text-center my-3"> Keep in Touch </h3>
        <div className="row mx-auto ">
          <div className="col-md-6 col-12 ">
            <MDBCardImage
              src="https://studentlife.nmsu.edu/silp/contact-us.png"
              alt="Generic placeholder image"
              className="mt-4 mb-3 img-thumbnail"
              fluid
              //   style={{ width: "150px", zIndex: "1" }}
            />
          </div>
          <div className="col-md-6 col-12  py-5">
            <div className="row">
              <div className="col">
                <div className="form-outline   col-12 ">
                  <label className="form-label" for="form8Example1">
                    Name <br />
                    <span className="text-danger">{message.name}</span>
                  </label>
                  <input
                    type="text"
                    id="form8Example1"
                    className="form-control border "
                    name="name"
                    value={contentObj.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline   col-12 ">
                  <label className="form-label" for="form8Example2">
                    Email address
                    <br />
                    <span className="text-danger">{message.email}</span>
                  </label>
                  <input
                    type="email"
                    id="form8Example2"
                    className="form-control border"
                    name="email"
                    value={contentObj.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="  col-12 ">
                <div className="form-outline ">
                  <label className="form-label" for="form8Example3">
                    Message
                    <br />
                    <span className="text-danger">{message.message}</span>
                  </label>
                  <textarea
                    type="text"
                    id="form8Example3"
                    className="form-control border"
                    placeholder="your message"
                    name="message"
                    value={contentObj.message}
                    onChange={handleChange}
                    rows={4}
                  ></textarea>
                </div>
                <div className="form-outline text-end">
                  <button
                    className="btn btn-dark my-3 "
                    onClick={handleSendMessage}
                  >
                    {" "}
                    Send{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
