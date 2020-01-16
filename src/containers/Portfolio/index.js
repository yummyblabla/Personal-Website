import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '../Card/index';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Container className="mb-5 text-center fixFooter">
        <h2 className="mb-5 mt-5 text-center">Portfolio</h2>
        <Row>
          <Card
            title="Big Two"
            imageName="bigtwo.jpeg"
            to="./portfolio/bigtwo"
            description="React + NextJS + Socket.io"
          />
          <Card
            title="Bike2Go"
            imageName="bike2go.jpg"
            to="./portfolio/bike2go"
            description="React + NextJS"
          />
          <Card
            title="Study Break"
            imageName="studybreak.jpeg"
            to="./portfolio/studybreak"
            description="Android Studio Code + Java"
          />

          <Card
            title="Minesweeper"
            imageName="minesweeper.jpeg"
            to="./portfolio/minesweeper"
            description="HTML5 Canvas + JavaScript + Bootstrap + Firebase"
          />

          <Card
            title="Mouse Click Accuracy Game"
            imageName="game.jpeg"
            to="./portfolio/accuracygame"
            description="HTML5 Canvas + JavaScript"
          />
        </Row>
      </Container>
    </>
  );
}
