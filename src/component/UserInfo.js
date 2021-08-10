import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Button } from "react-bootstrap";
function deleteUser(e)  {

}
export default function UserInfo() {
  const [name, setName] = useState("Unknown");
  const [email, setEmail] = useState("Unknown");
  
  return (
    
      <Container>
        <Row style = {{padding: 10}}>
          <label style = {{padding: 10}}>Họ và tên: </label>
          <label style = {{padding: 10}}>{name}</label>
        </Row>
        <Row style = {{padding: 10}}>
          <label style = {{padding: 10}}>Địa chỉ email:</label>
          <label style = {{padding: 10}}>{email}</label>
        </Row>
        <Row style = {{padding: 10}}>
         <a href="/quanly/UserInfoUpdate">Thay đổi thông tin</a> 
         </Row>
        <button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete your account('+ name+') ?')) deleteUser(e) } }>
              Xóa User
</button>
      </Container>
    
  );
}
