import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

class BodyComponent extends Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon icon={faHtml5} size="6x" />
				<h1>This is the main page.</h1>
			</div>
		);
	}
}

export default BodyComponent;
