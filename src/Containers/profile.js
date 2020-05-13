import React from 'react';
import '../App.css';
import { Form, Col, Button, Row } from 'reactstrap'
import Email from '../Components/email'
import { connect } from 'react-redux'
import UserName from '../Components/username'

const mapStateToProps = state => {
  return {
    userObj: state.userObj,
    profile: state.profile
  }
}

const Profile = props => {
	                   
	                  
                      const handleSubmit = event => {
                        event.preventDefault()
                        const email = event.target.email.value
                        const username = event.target.username.value
                        const password = event.target.password.value
                        console.log('userObj',props)
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
                            // Authorization: jwt,
                            "Accept":"application/json",
                            "Content-Type":"application/json",
                            Authorization: jwt
                          },
                          body:JSON.stringify(userObj)
                        }
                        fetch(`http://localhost:5000/api/v1/users/${id}`,configObj)
                          .then(resp => resp.json())
                          .then(data => console.log(data))
                      }
                      return (
                        <Row className="d-flex justify-content-center">
                          <Col xs={12} sm={8} lg={4}>
                          <h2>Profile</h2>
						  <h2>{console.log(props.profile.user)}</h2>
                          <Form className="form" onSubmit={handleSubmit}>
                            <Email placeholder={props.profile.user ? props.profile.user.email : "email@email.com"}/>
                            <UserName placeholder={props.profile.user ? props.profile.user.username : "username here"}/>
                            <Col className="d-flex justify-content-around">
                              <Button>Delete</Button>
                              <Button type="submit">Save</Button>
                              </Col>
                          </Form>
                          </Col>
                        </Row>
                    )
                    }

export default connect(mapStateToProps,null)(Profile)
