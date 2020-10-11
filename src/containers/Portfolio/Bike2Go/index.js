import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Bike2Go() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container className="fixFooter">
      <Row>
        <Col sm className="mt-5">
          <Image src={require('./../../../assets/mockups/bike2go.png')} className="mockupImage" />
        </Col>

        <Col sm className="mt-5">
          <h2>Bike2Go</h2>
          <h4>Mobile Friendly Website</h4>

          <p className="date py-2"><b className="mr-5">Date</b> November 2019</p>
          <div className="techstack d-flex py-2 mb-4">
            <p className="mr-5"><b>Tech Stack</b></p>
            <Image src={require('./../../../assets/icons/nextjs.svg')} className="techstackimage" />
            <Image src={require('./../../../assets/icons/react.svg')} className="techstackimage" />
            <Image src={require('./../../../assets/icons/node-dot-js.svg')} className="techstackimage" />
          </div>

          <p className="mb-3">
            This application was made for the <a href="https://vancouver.ca/streets-transportation/decode-congestion-hackathon.aspx">Decode Congestion Hackathon</a> hosted by City of Vancouver. We were engaged to provide tech solutions to decrease car congestion and promote other modes of transportation in Vancouver.
          </p>
          <p className="mb-3">
            The application my team and I made promotes bike usage by providing the safest route possible to their destination and a Google Street View visualization of what the route looks like and what sections of the route to be aware of.
          </p>
          <p className="mb-3">We were successful in creating a fully functional application in such a short amount of time. Even though we did not win, we were proud of our accomplishment and also of the fact that we (team of 6) worked well together.</p>

          <div className="mb-5">
            <a href="https://github.com/yummyblabla/Decode-Decongestion">
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
          <Image src={require('../../../assets/examples/bike2go/bike2go_1.png')} className="exampleImage" />
        </Col>
        <Col sm className="my-3">
          <Image src={require('../../../assets/examples/bike2go/bike2go_2.png')} className="exampleImage" />
        </Col>
      </Row>
    </Container>
  );
};
