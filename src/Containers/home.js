import React, { Component } from 'react';
import '../App.css';
import { Row, Container, Button } from 'reactstrap'
import NavBar from '../Components/NavBar'

class Home extends Component {
  constructor(props){
    super()
  }

  render(){
    return(
	<Container>
      <NavBar />
      <Container className="mt-4">
		<Row className="d-flex justify-content-center align-items-center">
			<Button color="success" size="lg" onClick={() => this.props.history.push('/sequences/new')}>Create New Sequence</Button>
		</Row>
	  </Container>
	  
	 
      </Container>
    )
  }
}

export default Home
