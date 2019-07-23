import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from './../Card/index';

export default function Portfolio() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	
	return (
		<React.Fragment>
          	
          	<Container className="mb-5 text-center fixFooter">
          		<h2 className="mb-5 mt-5 text-center">Portfolio</h2>
          		<Row>
          			<Col sm>
          				<Card
			  				title="Big Two"
			  				imageName="bigtwo.png"
			  				to="./portfolio/bigtwo"
			  				description="Pixi.js + Vue.js + WebSocket"
			  			/>
          			</Col>
          			<Col sm>
          				<Card
			  				title="Study Break"
			  				imageName="studybreak.png"
			  				to="./portfolio/studybreak"
			  				description="Android Studio Code + Java"
			  			/>
          			</Col>
          		</Row>
          		<Row>
          			<Col sm>
          				<Card
			  				title="Minesweeper"
			  				imageName="minesweeper.png"
			  				to="./portfolio/minesweeper"
			  				description="HTML5 Canvas + JavaScript + Bootstrap + Firebase"
			  			/>
          			</Col>
          			<Col sm>
          				<Card
			  				title="Mouse Click Accuracy Game"
			  				imageName="game.png"
			  				to="./portfolio/accuracygame"
			  				description="HTML5 Canvas + JavaScript"
			  			/>
          			</Col>
          		</Row>
          	</Container>
		</React.Fragment>
	);
};
