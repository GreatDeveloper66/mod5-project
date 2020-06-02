import React, { Component } from 'react';
import '../App.css';
import NavBar from '../Components/NavBar'
import SequenceSlide from '../Components/SequenceSlide'




class ViewSequence extends Component {
	constructor(props){
		super()
	}
	
	bannerStyle = () => {
		return ({
			
			backgroundImage: `url(${require(`../images/Yogi_Class_A.jpg`)})`,
			/*backgroundColor: '#EAA724',*/
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '100%'
		})
  }
	
	render(){
		return(
			<div style = {this.bannerStyle()} >
			<NavBar />
			<SequenceSlide />
		</div>
		)
	}
}

export default ViewSequence