import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
} from "mdb-react-ui-kit";
import OfferForShop from "./OfferForShop";
import ApprovedOrder from "./ApprovedOrder";
import PendingOrder from "./PendingOrder";

export default function PillsForShop() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <>
      <MDBTabs pills className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
            style={{ color: "white" }}
          >
            Active Offers
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
            style={{ color: "white" }}
          >
            Orders
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab1"}>
          <MDBRow className="g-0 justify-content-start align-items-start ">
            <OfferForShop />
            <OfferForShop />
            <OfferForShop />
            <OfferForShop />
            <OfferForShop />
          </MDBRow>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === "tab2"}>
          <PendingOrder />
          <hr />
          <ApprovedOrder />
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
