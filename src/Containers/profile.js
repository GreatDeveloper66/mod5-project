import React from 'react';
import '../App.css';
import { Form, Col, Button, Row } from 'reactstrap'
import Email from '../Components/email'
import { connect } from 'react-redux'
import UserName from '../Components/username'
import LogOutUserAction from '../actions/logoutuser'

const mapStateToProps = state => {
  return {
    userObj: state.userObj,
    profile: state.profile
  }
}

const mapDispatchToProps = dispatch => {
	return {
		deleteUser: () => {
			dispatch(LogOutUserAction())
		}
	}
}

const Profile = props => {
	                   
					const handleDelete = () => {
						const id = props.profile.user.id
						const jwt = props.userObj.jwt
						const url = `http://localhost:5000/api/v1/users/${id}`
						const configObj = {
							method: 'DELETE',
							headers: {
								Authorization: `Bearer ${jwt}`
							}
						}
						fetch(url,{method: 'DELETE'})
							.then(response => response.json())
							.then(data => {
								props.deleteUser()
								props.history.push('/')
							})
						
					}
					
						
					
					
		
					
	                  
                      const handleSubmit = event => {
                        event.preventDefault()
                        const email = event.target.email.value
                        const username = event.target.username.value
                        const id = props.profile.user.id
                        const jwt = props.userObj.jwt
                        const userObj = {
                          user: {
                            id: id,
                            username: username,
                            email: email
                          }
                        }
                        const configObj = {
                          method: 'PATCH',
                          headers: {
                            "Accept":"application/json",
                            "Content-Type":"application/json",
                            Authorization: `Bearer ${jwt}`
                          },
                          body:JSON.stringify(userObj)
                        }
						const url = `http://localhost:5000/api/v1/users/${id}`
                        fetch(url,configObj)
                          .then(resp => resp.json())
                          .then(data => console.log(data))
                      }
                      return (
                        <Row className="d-flex justify-content-center">
                          <Col xs={12} sm={8} lg={4}>
                          <h2>Profile</h2>
                          <Form className="form" onSubmit={handleSubmit}>
                            <Email placeholder={props.profile.user ? props.profile.user.email : "email@email.com"}/>
                            <UserName placeholder={props.profile.user ? props.profile.user.username : "username here"}/>
                            <Col className="d-flex justify-content-around">
                              <Button onClick={handleDelete}>Delete</Button>
                              <Button type="submit">Save</Button>
                              </Col>
                          </Form>
                          </Col>
                        </Row>
                    )
                    }

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
