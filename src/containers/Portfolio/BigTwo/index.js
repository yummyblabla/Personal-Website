import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BigTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container className="fixFooter">
      <Row>
        <Col sm className="mt-5 p-4">
          <Image src={require('../../../assets/mockups/bigtwo.png')} className="mockupImage" />
        </Col>

        <Col sm className="mt-5">
          <h2>Big Two</h2>
          <h4>HTML5 Game</h4>

          <p className="date py-2">
            <b className="mr-5">Date</b>
            {' '}
            December 2019 - January 2020
          </p>
          <div className="techstack d-flex py-2 mb-4">
            <p className="mr-5"><b>Tech Stack</b></p>
            <Image src={require('../../../assets/icons/html5.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/javascript.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/react.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/node-dot-js.svg')} className="techstackimage" />
          </div>

          <p className="mb-3">
            As a personal project, I wanted to make a game that I knew very well and would enjoy playing online. As a result, I decided to make
            {' '}
            <a href="https://en.wikipedia.org/wiki/Big_two" className="colorPrimary textUnderline">Big Two</a>
            , which is a popular Chinese card game that only requires a deck of regular playing cards.
          </p>
          <p className="mb-3">I used PixiJS for rendering the actual game and React for other UI elements, such as login and lobby. Socket.io was chosen to handle and simulate real-time gameplay as players could exchange information with the server and others more easily in a fast paced game. </p>

          <p className="mb-3">
            BigTwo.io has been taken down due to server costs.
          </p>
          <div className="mb-5">
            <a href="https://github.com/yummyblabla/BigTwoNext">
              <Button variant="outline-primary" className="newButton">
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="mb-5">
            <p className="mb-0">
              Card Art belongs to
              {' '}
              <a href="https://sourceforge.net/projects/vector-cards/" className="colorPrimary textUnderline">Chris Aguilar</a>
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5 p-3">
        <Col sm className="my-3">
          <Image src={require('../../../assets/examples/bigtwo/bigtwo_1.png')} className="exampleImage" />
        </Col>
        <Col sm className="my-3">
          <Image src={require('../../../assets/examples/bigtwo/bigtwo_2.png')} className="exampleImage" />
        </Col>
      </Row>
    </Container>
  );
}
