import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import videoGames from "../img/videogames2.jpg";
const MyNav = () => {
  const [openNavColor, setOpenNavColor] = useState(false);
  const user = localStorage.getItem("user");
  const logout = () => {
    localStorage.removeItem("user");
  };
  return (
    <MDBNavbar
      expand="lg"
      dark
      bgColor="primary"
      style={{ backgroundColor: "#003d6b" }}
    >
      {" "}
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            style={{ width: "70px", height: "60px" }}
            src={videoGames}
            alt=""
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavColor(!openNavColor)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse open={openNavColor} navbar>
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="active">
              <MDBNavbarLink aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="products">Games</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="" onClick={logout}>
                Logout
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="active" href="">
                {user}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="About">About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default MyNav;
