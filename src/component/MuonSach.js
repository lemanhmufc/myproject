import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
export default class MuonSach extends Component {
  render() {
    return (
      <div>
        <Container fluid style={{
          padding:0
        }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicBookName">
              <Form.Label>Tên sách</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên sách" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNgayMuon">
              <Form.Label>Ngày mượn</Form.Label>
              <Form.Control type="date"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNgayTra">
              <Form.Label>Ngày trả</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Đăng ký mượn
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
