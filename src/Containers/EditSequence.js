import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import FooterBarEdit from '../Components/FooterBarEdit.js'
import AsanaCategory from '../Components/AsanaCategory'
import SortBar from '../Components/SortBar'
import { connect } from 'react-redux'
import AsanaCategories from '../Containers/AsanaCategories'
import Arrows from '../Components/Arrows'

const mapStateToProps = state => {
  return {
    categories: state.categories,
	categorylabel: state.categorylabel,
	sortasanas: state.sortasanas
  }
}

class EditSequence extends Component {
	constructor(props){
		super()
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
	}
	render(){
		return(
		<div>
			<NavBar />
			<AsanaCarousel deleteable={true}/>
			<Arrows />
			<AsanaCategory />
			<FooterBarEdit />
			<SortBar />
			<AsanaCategories />
			
		</div>
		)
	}
}

export default connect(mapStateToProps,null)(EditSequence)