import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import FooterBar from '../Components/FooterBar'
import AsanaCategory from '../Components/AsanaCategory'
import { connect } from 'react-redux'
import ClearSequenceAction from '../actions/clearsequence'

const mapStateToProps = state => {
  return {
    categories: state.categories
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
		const categories = this.props.categories
		return categories.map(category => <AsanaCategory name={category.name} asanas={category.asanas} key={category.id} />)
	}
	render(){
		return(
		<div>
			<NavBar />
			<AsanaCarousel />
			<FooterBar />
			{this.renderCategories()}
			
		</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewSequence)