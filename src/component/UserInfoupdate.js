import React, { Component } from "react";
import { useState } from "react";
import {Form,  Container } from "react-bootstrap";
import { Row, Button } from "react-bootstrap";
import { UserInfo } from "./UserInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login+Logout.css";
import { tsImportEqualsDeclaration } from "@babel/types";
import Footer from "./Footer";

export default class UserInfoUpdate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        //publisherId: "",
        //nxb: "",
        //author: "",
      };
    }
    handleNameChange = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value });
        console.log(this.state.name);
      };
    handleEmailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
        console.log(this.state.name);
      };
    
  render() {
    return (
      
        <Container  fluid style = {{padding:0}}>
          <Form fluid  style={{ marginTop: 100 }}>
            <Form.Group className="mb-3" controlId="formBookName">
              <Form.Label>Họ Và Tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Họ tên"
                onChange={this.handleNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookQuantity">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                onChange={this.handleEmailChange}
              />
            </Form.Group>
            

            <Button variant="primary" type="submit" onSubmit={this.submitBook}>
              Gửi
            </Button>
            
          </Form>
          <Footer />
        </Container>
     
    );
  }
}