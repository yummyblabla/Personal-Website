import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StudyBreak() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Container className="fixFooter">
			<Row>
				<Col sm className="mt-5 p-4 text-center">
					<Image src={require("./../../../assets/mockups/studybreak.png")} className="mobileImage" />
				</Col>

				<Col sm className="mt-5">
					<h2>StudyBreak</h2>
					<h4>Android App</h4>

					<p className="date py-2"><b className="mr-5">Date</b> January 2019</p>
					<div className="techstack d-flex py-2 mb-4">
						<p className="mr-5"><b>Tech Stack</b></p>
						<Image src={require("./../../../assets/icons/android.svg")} className="techstackimage" />
						<Image src={require("./../../../assets/icons/java.svg")} className="techstackimage" />
					</div>

					<p className="mb-3">This Android app was created during the 27-hour BCIT Co-op Hackathon. My team and I were able to utilize a new technology to provide a working solution to a common problem. We aimed to provide a resource for students to improve their mental and physical health during their study sessions.</p>
					<p className="mb-3">With agile methodologies in mind, we held hourly stand-up meetings to delegate tasks, and communicated any successes and impediments that each member came across. This was successful, as each member was working on different features and collectively collaborate as a team.</p>
					<p className="mb-3">We achieved 2nd place out of 10 different teams.</p>

					<div className="mb-2">
						<a href="https://github.com/yummyblabla/StudyBreak">
							<Button variant="outline-primary">
								<FontAwesomeIcon icon={faGithub} className="mr-1" />
								GitHub
							</Button>
						</a>
					</div>
				</Col>
			</Row>

			<Row className="mb-5 p-3">
				<Col sm className="my-3">
					<Image src={require("../../../assets/examples/studybreak/studybreak_1.png")} className="exampleImage" />
				</Col>
				<Col sm className="my-3">
					<Image src={require("../../../assets/examples/studybreak/studybreak_2.png")} className="exampleImage" />
				</Col>
				<Col sm className="my-3">
					<Image src={require("../../../assets/examples/studybreak/studybreak_3.png")} className="exampleImage" />
				</Col>
				<Col sm className="my-auto">
					<Image src={require("../../../assets/examples/studybreak/studybreak_4.png")} className="exampleImage" />
				</Col>
			</Row>
		</Container>
		
	);
};
