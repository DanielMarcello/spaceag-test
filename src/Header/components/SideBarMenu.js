import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faMap,
  faChartLine,
  faThermometerHalf
} from "@fortawesome/free-solid-svg-icons";

import { NavbarBrand, ListGroup } from "react-bootstrap";

import "../css/SideBarMenu.css";

const sideBarOptionsList = [
  { id: 1, name: "Inicio", icon: faHome },
  { id: 2, name: "Mapa", icon: faMap },
  { id: 3, name: "Tendencias", icon: faChartLine },
  { id: 4, name: "Meteorología", icon: faThermometerHalf }
];

class SideBarMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      sideBarClasses: ["sidebar"],
      toggleSideBar: false
    };
    this.updateModal = this.updateModal.bind(this);
  }

  updateModal = visible => {
    this.setState({ isVisible: visible });
  };

  openAction = () => {
    document.getElementById("Sidebar").style.display = "block";
    document.getElementById("Overlay").style.display = "block";
    this.setState({
      sideBarClasses: [this.state.sideBarClasses[0], "animate-left"]
    });
  };

  closeAction = () => {
    this.setState({
      sideBarClasses: [this.state.sideBarClasses[0], "animate-right"]
    });
    setTimeout(() => {
      document.getElementById("Sidebar").style.display = "none";
      document.getElementById("Overlay").style.display = "none";
    }, 150);
  };

  openSideBar = () => {
    if (!this.state.toggleSideBar) {
      this.openAction();
      this.setState({ toggleSideBar: true });
    } else {
      this.closeAction();
      this.setState({ toggleSideBar: false });
    }
  };

  render() {
    return (
      <div>
        <div
          className={this.state.sideBarClasses.join(" ")}
          style={{ display: "none", zIndex: 3 }}
          id="Sidebar"
        >
          <ListGroup>
            {sideBarOptionsList.map(item => (
              <ListGroup.Item action href="#" key={item.id}>
                <FontAwesomeIcon className="listIcon" icon={item.icon} />
                {item.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
          ,
        </div>
        <div className="overlay overlay-animation" id="Overlay" />
        <NavbarBrand onClick={this.openSideBar}>
          {!this.state.toggleSideBar ? (
            <FontAwesomeIcon
              icon={faBars}
              className="brandIcon"
              color="#036920"
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className="brandIcon"
              color="#036920"
            />
          )}
          <img
            alt="Raptor View"
            src="https://sg.com.mx/sites/default/files/styles/480x319/public/2018-09/react.png?itok=uDH8iO9y"
            style={{ width: 100, height: 40 }}
          />
        </NavbarBrand>
      </div>
    );
  }
}

export default SideBarMenu;
