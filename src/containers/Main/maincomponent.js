import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";

import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

class BodyComponent extends Component {
	render() {
		const iconSize = '4x';
		return (
			<div className="p-3 p-lg-5 d-flex flex-column">
				<div className="my-auto">
					<h1>Derrick&nbsp;
            			<span className="primary">Lee</span>
					</h1>
					<h3 className="mb-3 subheading">Vancouver, BC&nbsp;
            			<a className="primary" href="mailto:derricklee91@gmail.com">derricklee91@gmail.com</a>
					</h3>

					<div class="social-icons mb-3">
						<a href="https://www.linkedin.com/in/derricklee91">
							<FontAwesomeIcon icon={faLinkedin} size={iconSize} />
						</a>
						<a href="https://github.com/yummyblabla">
							<FontAwesomeIcon icon={faGithubSquare} size={iconSize} />
						</a>
					</div>

					<p className="mb-5">I am a BCIT CST student looking to make my first mark in the developing world. With the skills and experience I have gained from collaborative projects and hands-on learning, I am motivated to learn more and improve myself to make a contribution to the world.</p>
					
				</div>

				<hr class="m-0" />

				<div className="mt-5">
					<h4>Experience in Web Technologies</h4>
					<div>
						<FontAwesomeIcon icon={faReact} size={iconSize} className="icons" />
						<FontAwesomeIcon icon={faAngular} size={iconSize} className="icons" />
						<FontAwesomeIcon icon={faVuejs} size={iconSize} className="icons" />
						<FontAwesomeIcon icon={faJsSquare} size={iconSize} className="icons" />
						<FontAwesomeIcon icon={faNode} size={iconSize} className="icons" />
						<FontAwesomeIcon icon={faHtml5} size={iconSize} className="icons" />
						<FontAwesomeIcon icon={faCss3Alt} size={iconSize} className="icons" />
					</div>
					<h4 className="mt-5">Experience in Other Languages</h4>
					<div>
						<FontAwesomeIcon icon={faJava} size={iconSize} className="icons" />
						<FontAwesomeIcon icon={faPython} size={iconSize} className="icons" />
					</div>
				</div>
			
			</div>
		);
	}
}

export default BodyComponent;
