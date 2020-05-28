import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import CountDownClock from '../Components/CountDownClock'
import SequenceSlide from '../Components/SequenceSlide'




class ViewSequence extends Component {
	constructor(props){
		super()
	}
	
	bannerStyle = () => {
		return ({
			/*
			backgroundImage: `url(${require(`../images/Yogi_E.jpg`)})`,
			*/
			backgroundColor: '#EAA724',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: '100vh',
			width: '100%'
		})
  }
	
	render(){
		return(
			<div style = {this.bannerStyle()}>
			<NavBar />
			<SequenceSlide />
			
			
		</div>
		)
	}
}

export default ViewSequence