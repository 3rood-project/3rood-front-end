import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBadge,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";
import logo from "./asset/BrandFiles/3rood-low-resolution-logo-color-on-transparent-background.png";
import man from "./asset/man.png";

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <img src={logo} height="30" alt="" loading="lazy" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-center">
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/" className="text-dark">
                  Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/shops" className="text-dark">
                  Shops
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/joinUs" className="text-dark">
                  Join Us
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/about" className="text-dark">
                  About
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to="/contact" className="text-dark">
                  Contact
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav
            className="justify-content-end align-items-center flex-row "
            style={{ flexBasis: "20%" }}
          >
            <MDBNavbarItem>
              <MDBNavbarLink>
                <MDBBadge pill color="danger">
                  0
                </MDBBadge>
                <span>
                  <MDBIcon fas icon="shopping-cart"></MDBIcon>
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
            {true ? (
              <MDBDropdown>
                <MDBDropdownToggle className="ms-3 me-lg-0 align-self-center px-3 bg-dark">
                  Login
                  <MDBIcon fas icon="sign-in-alt" />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem className="py-2 px-3 ">
                    <Link to="/login" className="text-dark">
                      As User
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem className="py-2 px-3 ">
                    <Link to="/shopLogin" className="text-dark">
                      As Shop
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <MDBNavbarItem className="px-3">
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    <img src={man} alt="" width="40px" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem className="py-2 px-3 ">
                      <Link className="text-dark">Action</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem className="py-2 px-3 ">
                      <Link className="text-dark">View Profile</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      className="py-2 px-3 text-danger"
                      style={{ cursor: "pointer" }}
                    >
                      Logout
                      <MDBIcon fas icon="sign-out-alt" />
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
