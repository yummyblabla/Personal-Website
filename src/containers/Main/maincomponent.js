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

class BodyComponent extends Component {
	render() {
		const iconSize = '6x';
		return (
			<div>
				
				<FontAwesomeIcon icon={faLinkedin} size={iconSize} />
				<FontAwesomeIcon icon={faGithubSquare} size={iconSize} />

				<b/>
				<FontAwesomeIcon icon={faHtml5} size={iconSize} />
				<FontAwesomeIcon icon={faReact} size={iconSize} />
				<FontAwesomeIcon icon={faAngular} size={iconSize} />
				<FontAwesomeIcon icon={faVuejs} size={iconSize} />
				<FontAwesomeIcon icon={faJsSquare} size={iconSize} />
				<FontAwesomeIcon icon={faCss3Alt} size={iconSize} />
				<FontAwesomeIcon icon={faNode} size={iconSize} />
				<h1>This is the main page.</h1>
			</div>
		);
	}
}

export default BodyComponent;
