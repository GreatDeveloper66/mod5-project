import React, { Fragment } from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const Password = () => <Fragment>
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

export default Password
