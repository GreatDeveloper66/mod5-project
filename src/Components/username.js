import React from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const UserName = () => 
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
                          

export default UserName
