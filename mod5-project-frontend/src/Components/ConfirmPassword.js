import React, {Fragment} from 'react';
import '../App.css';
import { FormGroup, Col, Label, Input } from 'reactstrap'

const ConfirmPassword = () => 
							<Fragment>
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
								<Col>
									<FormGroup>
										<Label for="confirmPassword">Confirm Password</Label>
										<Input
										type="password"
										name="confirmpassword"
										id="confirmPassword"
										placeholder="********"
										/>
									</FormGroup>
								</Col>
                          </Fragment>

export default ConfirmPassword