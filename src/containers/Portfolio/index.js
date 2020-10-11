import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../Card/index';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Container className="mb-5 text-center fixFooter">
        <h2 className="mb-5 mt-5 text-center">Personal Projects / Games</h2>
        <Row>
          <Card
            title="Memory Game"
            imageName="memorygame.jpeg"
            to="./portfolio/memorygame"
            description="HTML5 Canvas + JavaScript + Nodejs + SQL"
          />
          <Card
            title="Multiplayer Mahjong"
            imageName="mahjong.jpeg"
            to="./portfolio/mahjong"
            description="AWS Serverless + React TypeScript + WebSocket + PixiJS"
          />
          <Card
            title="Big Two"
            imageName="bigtwo.jpeg"
            to="./portfolio/bigtwo"
            description="React + NextJS + Socket.io + PixiJS"
          />
          <Card
            title="Minesweeper"
            imageName="minesweeper.jpeg"
            to="./portfolio/minesweeper"
            description="HTML5 Canvas + JavaScript + Firebase"
          />
          <Card
            title="Mouse Click Accuracy Game"
            imageName="game.jpeg"
            to="./portfolio/accuracygame"
            description="HTML5 Canvas + JavaScript"
          />
        </Row>
        <h2 className="mb-5 mt-5 text-center">BCIT Industry Sponsored Student Projects</h2>
        <Row>
          <Card
            title="Disaster Pets Rework"
            imageName="disasterpets.jpeg"
            to="./portfolio/disasterpets"
            description="React + Firebase + Google Cloud Platform"
          />
          <Card
            title="Yalty Software User Management"
            imageName="yalty.png"
            to="./portfolio/yalty"
            description="AWS Serverless + React + CICD"
          />
        </Row>
        <h2 className="mb-5 mt-5 text-center">Hackathons</h2>
        <Row>
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
            description="Android Studio + Java"
          />
        </Row>
      </Container>
    </>
  );
}
