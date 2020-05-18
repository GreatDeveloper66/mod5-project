import React from 'react';
import '../App.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'


const AsanaCard = props => 
				<Card>
					<CardBody>
						<CardTitle>{props.title}</CardTitle>
						<CardSubtitle>{props.subtitle}</CardSubtitle>
					</CardBody>
						<img width="100%" src={require(`../images/${props.image}.svg`)} alt="asana"/>
				</Card>


export default AsanaCard