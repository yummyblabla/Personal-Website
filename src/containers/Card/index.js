import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

export default function CardComponent({ imageName, to, title, description }) {
	return (
		<Card className="mb-3 mx-auto">
			<Link to={to}>
				<Card.Img src={require(`../../assets/portfolio/${imageName}`)} className="cardImage" />
			</Link>
			
			<Card.Body>
				<Card.Title><h4>{title}</h4></Card.Title>
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</Card>
	);
}
