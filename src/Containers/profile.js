import React from 'react';
import '../App.css';
import { FormGroup, Form, Col, Label, Input, Button, Row } from 'reactstrap'
import BottomForm from '../Components/bottomform'
import TopForm from '../Components/topform'

const Profile = () => {
                      const handleSubmit = event => {
                        event.preventDefault()
                        console.log(event.target)
                      }
                      return (
                        <Row className="d-flex justify-content-center">
                          <Col xs={12} sm={8} lg={4}>
                          <h2>Profile</h2>
                          <Form className="form" onSubmit={handleSubmit}>
                            <TopForm />
                            <BottomForm />
                            <Col className="d-flex justify-content-around">
                              <Button>Delete</Button>
                              <Button type="submit">Save</Button>
                              </Col>
                          </Form>
                          </Col>
                        </Row>
                    )
                    }

export default Profile
