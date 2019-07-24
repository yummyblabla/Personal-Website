import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function Contact() {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendMessage = () => {
		const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScq1UiYBxVEm25pVitMor2q2rW3BedcPY4je-VE-BrRiZjicQ/formResponse"
		const GOOGLE_NAME_ID = "entry.328270509";
		const GOOGLE_NUMBER_ID = "entry.1030277489";
		const GOOGLE_EMAIL_ID = "entry.900125730";
		const GOOGLE_MESSAGE_ID = "entry.777813141";
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

		const formData = new FormData();
		formData.append(GOOGLE_NAME_ID, name);
		formData.append(GOOGLE_NUMBER_ID, number);
		formData.append(GOOGLE_EMAIL_ID, email);
		formData.append(GOOGLE_MESSAGE_ID, message);
		
		fetch(CORS_PROXY + GOOGLE_FORM_ACTION_URL, {
			method: 'POST',
			body: formData,
		})
			.then(response => console.log(response))
			.catch(error => console.log("Error: " + error));
	}
	return (
		<section id="contact">
			<Container className="fixFooter">
				<Row>
					<Col sm className="m-3">
						<h3 className="my-3">Links</h3>
						<p className="mb-3">You can contact me on whichever platform you find convenient below.</p>
						<a href="https://www.linkedin.com/in/derricklee91">
							<Image src={require("./../../assets/icons/linkedin.svg")} className="linkIcon mr-3" />
							<span className="text">Linkedin</span>
						</a>
						<div>
							<Image src={require("./../../assets/icons/gmail.svg")} className="linkIcon mr-3" />
							<span className="text">E-mail: </span>
							<a href="mailto:derricklee91@gmail.com">
								<span className="text">derricklee91@gmail.com</span>
							</a>
						</div>
						
						
					</Col>
					<Col sm className="m-3">
						<h3 className="my-3">Contact Me</h3>
						<Form className="formCSS mb-5">
							<Form.Group>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>E-mail</Form.Label>
								<Form.Control
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									type="text"
									value={number}
									onChange={e => setNumber(e.target.value)}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Message</Form.Label>
								<Form.Control
									type="text"
									value={message}
									onChange={e => setMessage(e.target.value)}
								/>
							</Form.Group>

							<Button onClick={sendMessage}>Submit</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
