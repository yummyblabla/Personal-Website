import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Yalty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container className="fixFooter">
      <Row>
        <Col sm className="mt-5 p-4 text-center">
          <Image src={require('../../../assets/mockups/disasterpets.jpeg')} className="mobileImage" style={{ width: 400 }} />
        </Col>

        <Col sm className="mt-5">
          <h2>Disaster Pets Rework</h2>
          <h4>Front End Development</h4>

          <p className="date py-2">
            <b className="mr-5">Date</b>
            September - December 2020
          </p>
          <div className="techstack d-flex py-2 mb-4">
            <p className="mr-5"><b>Tech Stack</b></p>
            <Image src={require('../../../assets/icons/firebase.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/react.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/gcp.svg')} className="techstackimage" />
          </div>

          <p className="mb-3">
            For my projects practicum course (COMP 4800) at BCIT, my team of four was tasked to improve the efficiency of Disaster Pet's codebase in 13 weeks using agile methodologies. Some hard requirements were Google Cloud Platform and Firebase, as most of the resources and database are already there.
          </p>
          <p className="mb-3">
            The whole website was rewritten in React, as there was code duplication throughout the previous codebase. Use of components eased this problem and made the current build much more manageable.
          </p>
          <p className="mb-3">
            As the team lead with the most Front-end experience, I supervised and reviewed my team's codebase ensure the code was up to standards and of high quality.
          </p>
          <p className="mb-3">
            The project is still in development.
          </p>
          <div className="mb-5">
            <a href="https://disasterpets.net">
              <Button variant="outline-primary" className="newButton">
                See Live URL Here
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
