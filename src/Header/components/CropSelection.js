import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from "react-bootstrap";

import "../css/CropSelection.css";

class CropSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonOrgOpt: this.props.cropsData.Crops,
      buttonFarmOpt: [],
      buttonCropOpt: [],
      buttonOrgName: "",
      buttonFarmName: "",
      buttonCropName: ""
    };
  }

  changeName = (buttonState, buttonName) => {
    switch (buttonState) {
      case "buttonOrgName":
        this.setState({
          buttonOrgName: buttonName,
          buttonFarmName: "",
          buttonCropName: ""
        });
        break;
      case "buttonFarmName":
        this.setState({ buttonFarmName: buttonName });
        break;
      case "buttonCropName":
        this.setState({ buttonCropName: buttonName });
        break;
      default:
        break;
    }
  };

  assignData = id => {
    var organizationPosition = this.state.buttonOrgOpt
      .map(item => {
        return item.id;
      })
      .indexOf(id);
    if (organizationPosition !== -1) {
      console.log(this.state.buttonOrgOpt[organizationPosition].farm);
      console.log(...this.state.buttonOrgOpt[organizationPosition].farm);
      console.log([...this.state.buttonOrgOpt[organizationPosition].farm]);
      this.setState(
        {
          buttonFarmOpt: [this.state.buttonOrgOpt[organizationPosition].farm]
        },
        console.log(
          this.state.buttonFarmOpt,
          this.state.buttonOrgOpt[organizationPosition].farm
        )
      );
    }
  };

  render() {
    return (
      <div className="CropSelection">
        <Dropdown className="buttonDD">
          <Dropdown.Toggle>
            {this.state.buttonOrgName.length > 0
              ? this.state.buttonOrgName
              : "Organization"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item disabled={true}>{"Organization"}</Dropdown.Item>
            {this.state.buttonOrgOpt.map(item => (
              <Dropdown.Item
                key={item.id}
                onClick={() => {
                  this.changeName("buttonOrgName", item.organization);
                  this.assignData(item.id);
                }}
              >
                {item.organization}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <FontAwesomeIcon icon={faCaretRight} className="caretRight" />

        <Dropdown className="buttonDD">
          <Dropdown.Toggle>
            {this.state.buttonFarmName.length > 0
              ? this.state.buttonFarmName
              : "Farm"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item disabled={true}>{"Farm"}</Dropdown.Item>
            {this.state.buttonFarmOpt.map(item => (
              <Dropdown.Item
                key={item.id}
                onClick={() => {
                  this.changeName(item.name);
                }}
              >
                {item.farm}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <FontAwesomeIcon icon={faCaretRight} className="caretRight" />

        <Dropdown className="buttonDD">
          <Dropdown.Toggle>
            {this.state.buttonCropName.length > 0
              ? this.state.buttonCropName
              : "Crop"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item disabled={true}>{"Crop"}</Dropdown.Item>
            {this.state.buttonCropOpt.map(item => (
              <Dropdown.Item
                key={item.id}
                onClick={() => {
                  this.changeName(item.organization);
                }}
              >
                {item.organization}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default CropSelection;
