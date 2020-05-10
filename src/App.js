import React from 'react';
import './App.css';
import { Container, FormGroup, Form, Col, Label, Input, Button, Row } from 'reactstrap'

function App() {
  return (
    <Container className="App">
    <Row className="justify-content-center">
      <Col xs={12} sm={8} lg={4}>
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>UserName</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button>Submit</Button>
      </Form>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
