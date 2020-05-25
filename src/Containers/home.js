import React, { Component } from 'react';
import '../App.css';
import { Row, Container, Button } from 'reactstrap'
import NavBar from '../Components/NavBar'

class Home extends Component {
  constructor(props){
    super()
  }
  
  bannerStyle = () => {
		return ({
			backgroundImage: `url(${require(`../images/Yogi_D.jpg`)})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '100%',
			
		})
  }

  render(){
    return(
	
     
	<div style={this.bannerStyle()} className="d-flex justify-content-center align-items-center">
		
		<Row className="d-flex justify-content-end align-items-center">
			<NavBar />
		</Row>
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
					<h1>Yoga Fitness</h1>
				</Row>			
			</Container>		
		
      <Container className="mt-4">
		<Row className="d-flex justify-content-center align-items-center">
			<Button color="success" size="lg" onClick={() => this.props.history.push('/sequences/new')}>Create New Sequence</Button>
			<Button color="primary" size="lg" onClick={() => this.props.history.push('/sequences/presets')}>Quick Workout</Button>
			</Row>
			</Container>
		
		
	  
	  
	 </div>
      
    )
  }
}

export default Home
