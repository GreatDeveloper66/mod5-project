import React, { Fragment } from 'react';
import '../App.css';
import { FormGroup, Form, Col, Label, Input, Button, Row } from 'reactstrap'

const BottomForm = () => <Fragment>
                            <Col>
                              <FormGroup>
                                <Label>Username</Label>
                                <Input
                                  type="text"
                                  name="username"
                                  id="exampleUserName"
                                  placeholder="username"
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
                          </Fragment>
                          
export default BottomForm
