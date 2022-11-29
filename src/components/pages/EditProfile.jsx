import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function EditProfile() {
  return (
    <>
      <MDBContainer
        fluid
        className="p-4 position-relative"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBRow className="justify-content-around">
          <MDBCol md="5">
            <form>
              <MDBCard className="my-5">
                <MDBCardBody className="p-5">
                  <div className="text-center mb-4">
                    <h3>Edit Profile</h3>
                  </div>{" "}
                  <MDBRow className="d-flex justify-content-between">
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First Name"
                        value="osama"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last Name"
                        type="text"
                        value="dasooky"
                      />
                    </div>
                    <div className="col-12 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        type="email"
                        value="osama.dasooky@gmail.com"
                      />
                      <div className="col-12">
                        <MDBInput wrapperClass="mb-4" type="file" />
                      </div>
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="birthday"
                        type="date"
                      />
                    </div>
                    <div className="col-6 ">
                      <select name="Gender" className="form-select">
                        <option value="male">male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="City"
                        type="text"
                        value="Zarqa"
                      />
                    </div>
                    <div className="col-6 ">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        type="tel"
                        value="0786238190"
                      />
                    </div>
                  </MDBRow>
                  <MDBBtn className="w-100 mb-2" size="md" color="dark">
                    save
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default EditProfile;
