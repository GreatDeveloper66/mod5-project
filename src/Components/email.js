import React from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const Email = () => 
                        <Col>
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              type="email"
                              name="email"
                              id="exampleEmail"
                              placeholder="myemail@email.com"
                            />
                          </FormGroup>
                        </Col>
                      

export default Email
