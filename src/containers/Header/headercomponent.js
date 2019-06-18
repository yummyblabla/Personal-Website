import React, { PureComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'
import styles from "../../App.css";

class HeaderComponent extends PureComponent {
	render() {
		return (
			<Navbar className={styles.navbar} expand="md">
				<img
					src={require("../../assets/profile.png")}
					className="brandImage"
					alt="Profile Pic"
				/>
				<Navbar.Brand bsPrefix="brand">
					<Link to="/" className="brandText">
						Derrick Lee
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<IndexLinkContainer
							to="/"
							style={{ textDecoration: "none" }}
							activeClassName="activeLink"
						>
							<Nav.Link bsPrefix="link">Home</Nav.Link>
						</IndexLinkContainer>
						<LinkContainer
							to="/experience"
							style={{ textDecoration: "none" }}
						>
							<Nav.Link bsPrefix="link">Experience</Nav.Link>
						</LinkContainer>
						<NavDropdown
							title="Portfolio"
							id="basic-nav-dropdown"
							bsPrefix="link"
						>
							<LinkContainer to="/portfolio">
								<NavDropdown.Item>See All</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Divider />
							<LinkContainer to="/bigtwo">
								<NavDropdown.Item>Big Two</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/studybreak">
								<NavDropdown.Item>StudyBreak</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/minesweeper">
								<NavDropdown.Item>Minesweeper</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/clickaccuracygame">
								<NavDropdown.Item>Clicking Accuracy Game</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
						<LinkContainer
							to="/aboutme"
							style={{ textDecoration: "none" }}
						>
							<Nav.Link bsPrefix="link">About Me</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default HeaderComponent;
