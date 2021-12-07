import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Mahjong() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container className="fixFooter">
      <Row>
        <Col sm className="mt-5 p-4 text-center">
          <Image src={require('../../../assets/mockups/mahjong.png')} className="mobileImage" style={{ width: 500 }} />
        </Col>

        <Col sm className="mt-5">
          <h2>Multiplayer Mahjong</h2>
          <h4>Serverless HTML5 Game</h4>

          <p className="date py-2">
            <b className="mr-5">Date</b>
            {' '}
            July - August 2020
          </p>
          <div className="techstack d-flex py-2 mb-4">
            <p className="mr-5"><b>Tech Stack</b></p>
            <Image src={require('../../../assets/icons/amazonaws.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/react.svg')} className="techstackimage" />
          </div>

          <p className="mb-3">During the summer break before our last term at BCIT, my classmates and I wanted to create a multiplayer game to add to our portfolio. We created Mahjong using the knowledge and skills we have accumulated over the past year in our co-ops and projects.</p>
          <p className="mb-3">With AWS, we wanted to experiment if a game can be created using serverless and with WebSocket. Managing game state was proven to be difficult, but it was still accomplished with the help of API Gateway and its WebSocket API. We used Typescript as our main language, as we used OOP principles throughout our code to ensure maintainability.</p>
          <p className="mb-3">As a product owner, it was always important to ensure documentation and prioritization of the backlog so that there are no blockers in development. We worked together very well as we all worked to our strengths to create an MVP of the game that users can play.</p>

          <div className="mb-2">
            <a href="https://gamblingkings-website.firebaseapp.com">
              <Button variant="primary" className="mr-2 newButton">Try Mahjong!</Button>
            </a>
            <a href="https://github.com/GamblingKings">
              <Button variant="outline-primary" className="newButton">
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                GitHub
              </Button>
            </a>
          </div>
        </Col>
      </Row>

      <Row className="mb-5 p-3">
        <Col sm className="my-3">
          <Image src={require('../../../assets/examples/mahjong/mahjong_1.jpg')} className="exampleImage" />
        </Col>
        <Col sm className="my-3">
          <Image src={require('../../../assets/examples/mahjong/mahjong_2.jpg')} className="exampleImage" />
        </Col>
      </Row>
    </Container>
  );
}
