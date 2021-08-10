import React, { Component } from "react";
import { Container, Row, Dropdown, Col, Button } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default class AuthorNXBDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nxb: [],
      author: [],
      dichGia: [],
      nxbResult: "",
      authorResult: "",
      dichGiaResult: "",
    };
  }
  componentWillMount() {
    this.setState({
      nxb: ["a", "b", "c"],
      author: ["a", "b", "c"],
      dichGia: ["a", "b", "c"],
    });
  }
  handleAuthor = (e) => {
    this.setState({ authorResult: e });
  };
  handleNXB = (e) => {
    this.setState({ nxbResult: e });
  };
  handleDichGia = (e) => {
    this.setState({ dichGiaResult: e });
  };
  render() {
    return (
      <Container>
        <Row
          style={{
            padding: 10,
          }}
        >
          <Col xs={2}>
            <Dropdown onSelect={this.handleAuthor}>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style ={{
                width: 150,
              }}>
                Tên tác giả
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.state.author.map((name) => {
                  return (
                    <Dropdown.Item href="#/action-1" eventKey={name}>
                      {name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <label>
              {this.state.authorResult != ""
                ? this.state.authorResult
                : "Tên tác giả"}
            </label>
          </Col>
        </Row>
        <Row
          style={{
            padding: 10,
          }}
        >
          <Col xs={2}>
            <Dropdown onSelect={this.handleNXB}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  width: 150,
                }}
              >
                Nhà xuất bản
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.state.nxb.map((nxb) => {
                  return (
                    <Dropdown.Item href="#/action-1" eventKey={nxb}>
                      {nxb}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <label>
              {this.state.nxbResult != ""
                ? this.state.nxbResult
                : "Nhà xuất bản:"}
            </label>
          </Col>
        </Row>
        <Row
          style={{
            padding: 10,
          }}
        >
          <Col xs={2}>
            <Dropdown onSelect={this.handleDichGia}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  width:150,
                }}
              >
                Tên dịch giả
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.state.dichGia.map((dichGia) => {
                  return (
                    <Dropdown.Item href="#/action-1" eventKey={dichGia}>
                      {dichGia}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <label>
              {this.state.dichGiaResult != ""
                ? this.state.dichGiaResult
                : "Tên dịch giả:"}
            </label>
          </Col>
        </Row>
        <Row  className="justify-content-md-center"
          style={{
            padding: 10,
           
            width: 200,
          }}
        >
          <Col><Button>Gửi</Button></Col>
          
        </Row>
      </Container>
    );
  }
}
