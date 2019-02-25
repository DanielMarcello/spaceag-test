import React, { Component } from "react";

import { Nav, Navbar } from "react-bootstrap";

import CropSelection from "./components/CropSelection.js";
import UploadImage from "./components/UploadImage.js";
import AddData from "./components/AddData.js";
import SideBarMenu from "./components/SideBarMenu.js";
import UserSession from "./components/UserSession.js";

import "./css/AppHeader.css";

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="AppHeader">
        <Navbar color="#ffffff" className="navbar">
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Item>
                <SideBarMenu className="SideBarMenu" />
              </Nav.Item>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Item>
                <CropSelection cropsData={this.props.cropsData} />
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item className="rightPart">
                <UploadImage />
              </Nav.Item>
              <Nav.Item className="rightPart">
                <AddData />
              </Nav.Item>
              <Nav.Item className="rightPart">
                <UserSession />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;
