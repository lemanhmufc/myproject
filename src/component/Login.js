import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Login+Logout.css';

export default class Login extends Component {
  render() {
    return (
      <Container className = "bg">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Địa chỉ mail</Form.Label>
            <Form.Control type="email" placeholder="Nhập email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Đăng nhập
          </Button>
        </Form>
      </Container>
    );
  }
}
