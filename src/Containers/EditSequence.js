import React, { Component } from 'react';
import '../App.css';
import AsanaCarousel from '../Components/AsanaCarousel'
import NavBar from '../Components/NavBar'
import FooterBarEdit from '../Components/FooterBarEdit.js'
import AsanaCategory from '../Components/AsanaCategory'
import data from '../json/categories.json'
import LoadCategoriesAction from '../actions/loadcategories'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loadcategories: categories => {
      dispatch(LoadCategoriesAction(categories))
    }
  }
}

class EditSequence extends Component {
	constructor(props){
		super()
	}
	
	componentDidMount() {
		this.props.loadcategories(data)
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
			<AsanaCategory />
			<FooterBarEdit />
			{this.renderCategories()}
			
		</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditSequence)