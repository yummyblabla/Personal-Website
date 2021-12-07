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
          <Image src={require('../../../assets/portfolio/memorygame.png')} className="mobileImage" style={{ width: 500 }} />
        </Col>

        <Col sm className="mt-5">
          <h2>Memory Game</h2>
          <h4>HTML5 Game</h4>

          <p className="date py-2">
            <b className="mr-5">Date</b>
            September 2020
          </p>
          <div className="techstack d-flex py-2 mb-4">
            <p className="mr-5"><b>Tech Stack</b></p>
            <Image src={require('../../../assets/icons/html5.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/javascript.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/node-dot-js.svg')} className="techstackimage" />
          </div>

          <p className="mb-3">
            This game created for the Internet Software Architecture course at BCIT.
            We were tasked to create a game similar to this&nbsp;
            <a href="https://www.youtube.com/watch?v=uNinYFJEAIM">video</a>
            .
          </p>
          <p className="mb-3">
            The game also keeps track of high scores and makes use of
            the free Heroku Postgres database.
          </p>
          <p className="mb-3">
            I wanted to challenge myself and make the application OOP as
            much as possible and using Canvas.
            It was a great learning experience to handle different game
            states to control game logic and rendering.
          </p>

          <div className="mb-2">
            <a href="https://comp4537.derricklee.dev/comp4537/MemoryGame/index.html">
              <Button variant="primary" className="mr-2 newButton">Play now!</Button>
            </a>
            <a href="https://github.com/yummyblabla/yummyblabla.github.io/tree/master/comp4537/MemoryGame">
              <Button variant="outline-primary" className="newButton">
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                GitHub
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
