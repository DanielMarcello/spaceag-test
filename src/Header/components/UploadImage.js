import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Button } from "react-bootstrap";

class UploadImage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Button>
        <FontAwesomeIcon icon={faArrowUp} />
        Upload image
      </Button>
    );
  }
}

export default UploadImage;
