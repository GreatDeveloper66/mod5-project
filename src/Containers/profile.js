import React, { Component } from 'react';
import '../App.css';
import { Form, Col, Button, Row, Container, Card } from 'reactstrap'
import Email from '../Components/email'
import { connect } from 'react-redux'
import UserName from '../Components/username'
import LogOutUserAction from '../actions/logoutuser'
import SavedSequences from '../Components/SavedSequences'
import NavBar from '../Components/NavBar'

const URL = process.env.REACT_APP_API_URL

const mapStateToProps = state => {
  return {
    jwt: state.jwt,
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

class Profile extends Component {
	constructor(props){
		super()
	}
	                   
	handleDelete = () => {
		const id = this.props.profile.user.id
		const jwt = this.props.jwt
		const url = `${URL}/api/v1/users/${id}`
		const configObj = {
							method: 'DELETE',
							headers: {
								Authorization: `Bearer ${jwt}`
							}
						}
						fetch(url,configObj)
							.then(response => response.json())
							.then(data => {
								this.props.deleteUser()
								this.props.history.push('/')
							})
						
					}
					
						       
    handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const username = event.target.username.value
        const id = this.props.profile.user.id
        const jwt = this.props.jwt
        const userObj = {
                         user: {
                         id: id,
                         username: username,
                         email: email,
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
						const url = `${URL}/api/v1/users/${id}`
                        fetch(url,configObj)
                          .then(resp => resp.json())
                          .then(data => {
                          	this.props.history.push('/home')
                          })
                      }
	render(){
            return (
			<div style={{backgroundColor: '#E59866', height: '100vh', overflowY: 'hidden'}}>
				<NavBar />
				<Container className="mt-5">
                    <Row className="d-flex justify-content-center">
                          <Col xs={12} sm={8} lg={4}>
						  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                          <h2>Profile</h2>
                          <Form className="form" onSubmit={this.handleSubmit}>
                            <Email placeholder={this.props.profile.user ? this.props.profile.user.email : "email@email.com"}/>
                            <UserName placeholder={this.props.profile.user ? this.props.profile.user.username : "username here"}/>
                            <Col className="d-flex justify-content-around">
                              <Button onClick={this.handleDelete}>Delete</Button>
                              <Button type="submit">Save</Button>
                              </Col>
                          </Form>
						  </Card>
                          </Col>
                        </Row>
						<SavedSequences />
					</Container>
				
				</div>
                    )
                    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
