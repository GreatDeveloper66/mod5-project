import React from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const UserName = props => 
                            <Col>
                              <FormGroup>
                                <Label>Username</Label>
                                <Input
                                  type="text"
                                  name="username"
                                  id="exampleUserName"
                                  placeholder={props.placeholder}
                                />
                              </FormGroup>
                            </Col>
                          

export default UserName
