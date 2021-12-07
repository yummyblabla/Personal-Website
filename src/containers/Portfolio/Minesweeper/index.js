import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Minesweeper() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container className="fixFooter">
      <Row>
        <Col sm className="mt-5">
          <Image src={require('../../../assets/mockups/minesweeper.png')} className="mockupImage" />
        </Col>

        <Col sm className="mt-5">
          <h2>Minesweeper</h2>
          <h4>HTML5 Game</h4>

          <p className="date py-2">
            <b className="mr-5">Date</b>
            December 2018
          </p>
          <div className="techstack d-flex py-2 mb-4">
            <p className="mr-5"><b>Tech Stack</b></p>
            <Image src={require('../../../assets/icons/html5.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/css-3.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/javascript.svg')} className="techstackimage" />
            <Image src={require('../../../assets/icons/firebase.svg')} className="techstackimage" />
          </div>

          <p className="mb-3">This game was created for my Web Development course at BCIT. The class was given a task of recreating the classic game of Minesweeper with the limitations of using only JavaScript, HTML, and CSS. No libraries such as jQuery were allowed.</p>
          <p className="mb-3">The application must also be mobile friendly and be connected a database that can store and retrieve high-scores.</p>
          <p className="mb-3">Because I am a Minesweeper player at heart, I made the game similar to the original. My personal best on Expert mode is 124 seconds.</p>

          <div className="mb-5">
            <a href="https://minesweeper-50f64.firebaseapp.com/">
              <Button variant="primary" className="mr-2 newButton">Play Minesweeper!</Button>
            </a>
            <a href="https://github.com/yummyblabla/MinesweeperGame">
              <Button variant="outline-primary" className="newButton">
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="mb-5">
            <p className="mb-0">
              Sound belongs to Mike Koenig on
              {' '}
              <a href="http://soundbible.com/">SoundBible</a>
            </p>
            <p className="mb-0">
              Art belongs to
              {' '}
              <a href="https://opengameart.org/users/eugeneloza">Eugene Loza</a>
              {' '}
              on
              {' '}
              <a href="https://www.deviantart.com/hopstarter">DevianArt</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
