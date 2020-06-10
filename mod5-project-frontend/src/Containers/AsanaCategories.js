import React, { Component } from 'react';
import '../App.css';
import AsanaCategory from '../Components/AsanaCategory'
import { connect } from 'react-redux'
import { Col } from 'reactstrap'
import AsanaCard from '../Components/AsanaCard'

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
	categorylabel: state.categorylabel,
	sortasanas: state.sortasanas
  }
}


class AsanaCategories extends Component {

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
			const sorted = this.props.sortasanas
			let newcats = categories.map(category => category.asanas).flat()
			let eliminateDuplicates = arr => {
				let ids = []
				let newarr = []
				arr.forEach(asana => {
					if(!ids.includes(asana.id)){
						ids.push(asana.id)
						newarr.push(asana)
					}
				})
				return newarr
			}
			newcats = eliminateDuplicates(newcats)
			if(sorted === "ATOZ"){
				newcats = newcats.sort((a,b) => a.englishname.localeCompare(b.englishname))
				console.log(newcats)
			}
			if(sorted === "ZTOA"){
				newcats = newcats.sort((a,b) => b.englishname.localeCompare(a.englishname))
				console.log(newcats)
			}
			return <AsanaCategory name={"All"} asanas={newcats} key = {"All"} />
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
