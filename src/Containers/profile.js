import React from 'react';
import '../App.css';
import { Form, Col, Button, Row } from 'reactstrap'
import BottomForm from '../Components/bottomform'
import TopForm from '../Components/topform'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    userObj: state.userObj
  }
}

const Profile = props => {
                      const handleSubmit = event => {
                        event.preventDefault()
                        const email = event.target.email.value
                        const username = event.target.username.value
                        const password = event.target.password.value
                        const id = props.userObj.user.id
                        const jwt = props.userObj.jwt
                        const userObj = {
                          User: {
                            id: id,
                            username: username,
                            email: email,
                            password: password
                          }
                        }
                        const configObj = {
                          method: 'PATCH',
                          headers: {
                            Authorization:jwt,
                            "Accept":"application/json",
                            "Content-Type":"application/json"
                          },
                          body:JSON.stringify(userObj)
                        }
                        fetch('http://localhost:5000/')
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
