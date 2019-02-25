import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from "react-bootstrap";

const meteorologyOptions = [
  { id: 1, name: "Evapotranspiración" },
  { id: 2, name: "Temperatura Máxima" },
  { id: 3, name: "Temperatura Mínima" }
];
const irrigationOptions = [{ id: 1, name: "Índice de Humedad" }];
const productionOptions = [
  { id: 1, name: "Número de Flores" },
  { id: 2, name: "Número de Frutos" },
  { id: 3, name: "Producción" }
];
const vegetationOptions = [{ id: 1, name: "Índice de Vegetación" }];

class AddData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Dropdown alignRight>
        <Dropdown.Toggle>
          <FontAwesomeIcon icon={faPlus} />
          Add data
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item disabled={true}>Select data type</Dropdown.Item>
          <Dropdown.Header>Meteorology</Dropdown.Header>
          {meteorologyOptions.map(item => (
            <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
          ))}
          <Dropdown.Header>Irrigation</Dropdown.Header>
          {irrigationOptions.map(item => (
            <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
          ))}
          <Dropdown.Header>Production</Dropdown.Header>
          {productionOptions.map(item => (
            <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
          ))}
          <Dropdown.Header>Vegetation</Dropdown.Header>
          {vegetationOptions.map(item => (
            <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default AddData;
