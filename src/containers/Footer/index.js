import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footerSection">
      <div className="footerIcons text-center">
        <a href="https://www.linkedin.com/in/derricklee91">
          <Image src={require('./../../assets/icons/linkedin.svg')} className="footerIcon" />
        </a>
        <a href="https://github.com/yummyblabla">
          <Image src={require('./../../assets/icons/github.svg')} className="footerIcon" />
        </a>
        <a href="mailto:derricklee91@gmail.com">
          <Image src={require('./../../assets/icons/gmail.svg')} className="footerIcon" />
        </a>
      </div>

      <Container className="footerSection pb-5 pl-3 pr-3 pt-1">
        <Row>
          <Col sm className="mt-4 d-flex flex-column">
            <h4>Navigation</h4>
            <Link to="/" className="footerLink">Home</Link>
            <Link to="/portfolio" className="footerLink">Portfolio</Link>
            <Link to="/contact" className="footerLink">Contact</Link>
          </Col>

          <Col sm className="mt-4 d-flex flex-column">
            <h4>Portfolio</h4>
            <Row>
              <Col sm className="d-flex flex-column">
                <Link to="/portfolio/memorygame" className="footerLink">Memory Game</Link>
                <Link to="/portfolio/mahjong" className="footerLink">Mahjong</Link>
                <Link to="/portfolio/bigtwo" className="footerLink">Big Two</Link>
                <Link to="/portfolio/minesweeper" className="footerLink">Minesweeper</Link>
                <Link to="/portfolio/accuracygame" className="footerLink">Accuracy Game</Link>
              </Col>
              <Col sm className="d-flex flex-column">
                <Link to="/portfolio/disasterpets" className="footerLink">Disaster Pets</Link>
                <Link to="/portfolio/yalty" className="footerLink">Yalty Software</Link>
                <Link to="/portfolio/bike2go" className="footerLink">Bike2Go</Link>
                <Link to="/portfolio/studybreak" className="footerLink">StudyBreak</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
