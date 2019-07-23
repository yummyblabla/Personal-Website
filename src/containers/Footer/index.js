import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footerSection">
			<div className="footerIcons text-center">
				<a href="https://www.linkedin.com/in/derricklee91">
					<Image src={require("./../../assets/icons/linkedin.svg")} className="footerIcon" />
				</a>
				<a href="https://github.com/yummyblabla">
					<Image src={require("./../../assets/icons/github.svg")} className="footerIcon" />
				</a>
				<a href="mailto:derricklee91@gmail.com">
					<Image src={require("./../../assets/icons/gmail.svg")} className="footerIcon" />
				</a>
			</div>

			<Container className="footerSection pb-3 pl-3 pr-3 pt-1">
				<Row>
					<Col sm className="mt-4 d-flex flex-column">
						<h4>Navigation</h4>
						<Link to="/" className="footerLink">Home</Link>
						<Link to="/portfolio" className="footerLink">Portfolio</Link>
						<Link to="/contact" className="footerLink">Contact</Link>
					</Col>

					<Col sm className="mt-4 d-flex flex-column">
						<h4>Portfolio</h4>
						<Link to="/portfolio/bigtwo" className="footerLink">Big Two</Link>
						<Link to="/portfolio/studybreak" className="footerLink">StudyBreak</Link>
						<Link to="/portfolio/minesweeper" className="footerLink">Minesweeper</Link>
						<Link to="/portfolio/accuracygame" className="footerLink">Accuracy Game</Link>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
