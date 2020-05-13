import React from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const Email = props => 
                        <Col>
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              type="email"
                              name="email"
                              id="exampleEmail"
                              placeholder={props.placeholder}
                            />
                          </FormGroup>
                        </Col>
                      

export default Email
