import React, { Component } from 'react'

import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainView from './component/MainView';

export default class App extends Component {
 
  render() {
    return (
      <Container fluid style={{
        padding: '0',
      
      }}>
        <MainView/>
       
      </Container>

    )
  }
}
