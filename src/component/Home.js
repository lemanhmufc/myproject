import React from "react";
import { Carousel, Row, Card, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import book1 from "../asset/book1.jpg";
import book2 from "../asset/book2.jpg";
import book3 from "../asset/book3.jpg";
import Image from "react-bootstrap/Image";
import BookList from "../model/Book";
import Footer from "./Footer";
export default function Home() {
  const [index, setIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect( () => {
   setBooks([new BookList("Sach van", "Nguyen Van A", "Kim dong"),
   new BookList("Sach toan", "Nguyen Van B", "Kim dong"),
   new BookList("Truyen cuoi", "Nguyen Van C", "Kim dong"),
   new BookList("Truyen ngu ngon", "Nguyen Van D", "Kim dong"),
   new BookList("Truyen doremon", "Nguyen Van E", "Kim dong"),
   new BookList("Sach tham khao", "Nguyen Van F", "Kim dong"),
   new BookList("Sach hoa", "Nguyen Van G", "Kim dong"),
   new BookList("Sach dia", "Nguyen Van H", "Kim dong")])
 }, []);
  return (
    <div style={{ height: 200 }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: 250 }}>
          <Image
            className="d-block w-100"
            src={book1}
            alt="First slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: 250 }}>
          <Image
            className="d-block w-100"
            src={book2}
            alt="Second slide"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: 250 }}>
          <Image
            className="d-block w-100"
            src={book3}
            alt="Third slide"
            fluid
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <h5 style={{ marginTop: 50, marginLeft: 30 }}>Truyên mới</h5>
        <Row xs={1} md={4} className="g-4">
          {books.map((book, idx) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{book.name}</Card.Title>
                  <Card.Text>
                    {"Tác giả: " + book.author}
                  </Card.Text>
                  <Card.Text>
                    {"Nhà xuất bản: " + book.nxb}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
      <Footer style={{ marginTop: 300 }}/>
    </div>
  );
}
