import React, { Component } from 'react';
import '../App.css';
import AsanaCategory from '../Components/AsanaCategory'
import { connect } from 'react-redux'
import { Col } from 'reactstrap'
import AsanaCard from '../Components/AsanaCard'

const mapStateToProps = state => {
  return {
    categories: state.categories,
	categorylabel: state.categorylabel,
	sortasanas: state.sortasanas
  }
}


class AsanaCategories extends Component {
	constructor(props){
		super(props)
	}


renderAsanaCard = card => {
		return <Col xs="3" key={card.id}><AsanaCard title={card.sanskritname} 
			                              subtitle={card.englishname} image={card.picurl} asana_id={card.id} 
										  time={card.duration} /></Col>
	}

renderCategories = () => {
		const label = this.props.categorylabel
		const categories = this.props.categories
		if(label === ""){
			return categories.map(category => <AsanaCategory name={category.name} asanas={category.asanas} key={category.id} />)
		}
		else if(label === "All"){
			if(this.props.sortasanas === "US"){
				const newcats = categories.map(category => category.asanas).flat()
				return newcats.map(asana => this.renderAsanaCard(asana))
			}
			else if(this.props.sortasanas === "ATOZ"){
				const newcats = categories.map(category => category.asanas).flat().sort((a,b) => a.name - b.name)
				return newcats.map(asana => this.renderAsanaCard(asana))
			}
			else {
				const newcats = categories.map(category => category.asanas).flat().sort((a,b) =>  b.name - a.name)
				return newcats.map(asana => this.renderAsanaCard(asana))
			}
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
		{this.renderCategories()}
		</div>
		)
	}
}

export default connect(mapStateToProps,null)(AsanaCategories)