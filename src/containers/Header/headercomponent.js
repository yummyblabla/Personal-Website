import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import styles from "../../App.css";

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}

	render() {
		const { open } = this.state;
		return (
			<Navbar className={styles.navbar} expand="sm">
				<img
					src={require("../../assets/profile.png")}
					className="brandImage"
					alt="Profile Pic"
				/>
				<Navbar.Brand bsPrefix="brand">Derrick Lee</Navbar.Brand>
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
								<NavDropdown.Item>All</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Divider />
							<LinkContainer to="/portfolio">
								<NavDropdown.Item>Project 1</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/portfolio">
								<NavDropdown.Item>Project 2</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/portfolio">
								<NavDropdown.Item>Project 3</NavDropdown.Item>
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
