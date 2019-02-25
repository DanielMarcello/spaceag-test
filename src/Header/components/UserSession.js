import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from "react-bootstrap";

class UserSession extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Dropdown alignRight>
        <Dropdown.Toggle>
          <FontAwesomeIcon icon={faUserCircle} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item disabled={true}>User Name</Dropdown.Item>
          <Dropdown.Item>Change of password</Dropdown.Item>
          <Dropdown.Item>
            <FontAwesomeIcon icon={faSignOutAlt} /> Log out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default UserSession;
