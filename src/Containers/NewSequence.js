import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import FooterBar from '../Components/FooterBar'
import SortBar from '../Components/SortBar'
import AsanaCategory from '../Components/AsanaCategory'
import { connect } from 'react-redux'
import ClearSequenceAction from '../actions/clearsequence'

const mapStateToProps = state => {
  return {
    categories: state.categories,
	categorylabel: state.categorylabel
  }
}

const mapDispatchToProps = dispatch => {
	return {
		clearsequence: () => {
			dispatch(ClearSequenceAction())
		}
	}
}


class NewSequence extends Component {
	constructor(props){
		super()
	}
	
	componentDidMount() {
		this.props.clearsequence()
	}

	
	renderCategories = () => {
		const label = this.props.categorylabel
		const categories = this.props.categories
		if(label === "" || label === "All"){
			return categories.map(category => <AsanaCategory name={category.name} asanas={category.asanas} key={category.id} />)
		}
		else {
			return categories.filter(category => category.name === label)
						.map(category => <AsanaCategory name={category.name} 
								asanas={category.asanas} key={category.id} />)
		}
		
		return categories.map(category => <AsanaCategory name={category.name} asanas={category.asanas} key={category.id} />)
	}
	render(){
		return(
		<div>
			<NavBar />
			<AsanaCarousel />
			<FooterBar />
			<SortBar />
			{this.renderCategories()}
			
		</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewSequence)