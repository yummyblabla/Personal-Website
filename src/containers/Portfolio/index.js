import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from './../Card/index';

export default function Portfolio() {
	return (
		<React.Fragment>
          	<h2 className="mb-5 mt-5 text-center">Portfolio</h2>
          	<Container className="mb-5 text-center">
          		<Row>
          			<Col sm>
          				<Card
			  				title="Big Two"
			  				imageName="bigtwo.png"
			  				to="./portfolio/bigtwo"
			  				description="Something"
			  			/>
          			</Col>
          			<Col sm>
          				<Card
			  				title="Study Break"
			  				imageName="studybreak.png"
			  				to="./portfolio/studybreak"
			  				description="Something"
			  			/>
          			</Col>
          		</Row>
          		<Row>
          			<Col sm>
          				<Card
			  				title="Minesweeper"
			  				imageName="minesweeper.png"
			  				to="./portfolio/minesweeper"
			  				description="Something"
			  			/>
          			</Col>
          			<Col sm>
          				<Card
			  				title="Mouse Click Accuracy Game"
			  				imageName="game.png"
			  				to="./portfolio/accuracygame"
			  				description="HTML5 Canvas, JavaScript"
			  			/>
          			</Col>
          		</Row>
          	</Container>
		</React.Fragment>
	);
};
