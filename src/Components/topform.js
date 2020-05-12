import React, { Fragment } from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const TopForm = () => <Fragment>
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
                      </Fragment>

export default TopForm
