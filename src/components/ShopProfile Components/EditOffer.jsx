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

export default function EditOffer({ setStaticModal, staticModal, toggleShow }) {
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
              <MDBModalTitle>Edit Offer</MDBModalTitle>
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
              <MDBBtn color="dark">save change</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
