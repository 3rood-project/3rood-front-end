import axios from "axios";
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
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { fetchShopProfileData } from "../../redusers/ShopProfileReduser";
import useValidation from "../hooks/useValidation";
import AddOfferComp from "./AddOfferComp";

export default function AddOffer({ setStaticModal, staticModal, toggleShow }) {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const [offerData, setOfferData] = useState({
    product_name: "",
    product_price: "",
    product_image: "",
    product_Quantity: "",
    expiration_date: "",
    product_tag: "",
    product_description: "",
  });
  const { isNotEmptyValidation, message } = useValidation();
  const handleChange = (e) => {
    setOfferData({ ...offerData, [e.target.name]: e.target.value });
  };
  const checkValidation = () => {
    let Name = isNotEmptyValidation("product_name", offerData.product_name);
    let price = isNotEmptyValidation("product_price", offerData.product_price);
    let image = isNotEmptyValidation("product_image", offerData.product_image);
    let Quantity = isNotEmptyValidation(
      "product_Quantity",
      offerData.product_Quantity
    );
    let duoTo = isNotEmptyValidation(
      "expiration_date",
      offerData.expiration_date
    );
    let tag = isNotEmptyValidation("product_tag", offerData.product_tag);
    let description = isNotEmptyValidation(
      "product_description",
      offerData.product_description
    );

    if (Name && price && image && Quantity && tag && duoTo && description) {
      return true;
    } else return false;
  };
  const handleAddOffer = () => {
    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/shop/addOffer",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${auth().token}`,
      },
      data: offerData,
    };
    if (checkValidation()) {
      axios(config)
        .then(function (res) {
          console.log(res.data);
          setOfferData({
            product_name: "",
            product_price: "",
            product_image: "",
            product_Quantity: "",
            expiration_date: "",
            product_tag: "",
            product_description: "",
          });
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: res.data.message,
          });
          toggleShow();
          dispatch(fetchShopProfileData(auth().token));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
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
              <AddOfferComp
                handleChange={handleChange}
                offerData={offerData}
                message={message}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="danger" onClick={toggleShow}>
                Cancel
              </MDBBtn>
              <MDBBtn color="dark" onClick={handleAddOffer}>
                add offer
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
