import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarComponent = ({ account }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">ELECTION DAPP</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Account Address :<a href="">{account}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
