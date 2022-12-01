import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import AddOfferComp from "./AddOfferComp";

export default function AddOffer({ setStaticModal, staticModal, toggleShow }) {
  return (
    <>
      <MDBModal
        staticBackdrop
        tabIndex="-1"
        show={staticModal}
        setShow={setStaticModal}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>ADD Offer</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <AddOfferComp />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="danger" onClick={toggleShow}>
                Cancel
              </MDBBtn>
              <MDBBtn color="dark">add offer</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
