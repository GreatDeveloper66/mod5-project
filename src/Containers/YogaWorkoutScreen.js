import React, { Component } from 'react';
import '../App.css';
import YogaJumbotron from '../Components/YogaJumbotron'
import NavBar from '../Components/NavBar'
import preset_sequences from '../json/preset_sequences.json'

class YogaWorkoutScreen extends Component {
	constructor(props){
		super()
	}
	
	renderJumbotrons = () => {
		return preset_sequences.map((sequence, index) => {
													return <YogaJumbotron key={index} img = {sequence.img} name={sequence.name} asanas={sequence.asanas}/>
												}) 
	}
	
	render(){
		return(
		
		<div style={{backgroundColor: '#EAA724'}}>
			<NavBar />
			<div>
				{this.renderJumbotrons()}
			</div>
		</div>
		)
	}
}

export default YogaWorkoutScreen