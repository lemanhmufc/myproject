import React from "react";
import { Container, Row, Card } from "react-bootstrap";
export default function Footer() {
  return (
    <div>
      <Container  fluid  style={{
        padding: '0',
        marginTop: 50,
        width: "100px !important" ,
            
      }}>
      
      <Card
        fluid
        className="mb-2"
        style = {{
          width: "100%",
          backgroundColor: "#f2dcb3",
        }}
      >
        <Card.Body>
          <Card.Title>Website quản lý thư viện trực tuyến</Card.Title>
          <Card.Text>
          Bài tập lớn nhóm 11
          </Card.Text>
          <Card.Text>
          Trường Đại học công nghệ - Đại học Quốc Gia Hà Nội
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </div>
    
  );
}
