import React, { Fragment } from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const UserName = () => <Fragment>
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
                          </Fragment>

export default UserName
