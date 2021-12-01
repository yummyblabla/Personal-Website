import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import Card from '../Card';

const RESUME_LINK = 'https://drive.google.com/file/d/1L8jK1CvtobmPnExuhCWHfQBI5gdDvUel/view?usp=sharing';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section id="intro">
        <div className="intro mb-3">
          <div className="introTitle">
            <h2>Derrick Lee</h2>
            <h4>Developer in Vancouver, B.C.</h4>
            <div className="mt-3">
              <Link to="/portfolio">
                <Button variant="primary" className="mr-2">
                  See Portfolio
                </Button>
              </Link>

              <AnchorLink href="#about">
                <Button variant="outline-primary">About Me</Button>
              </AnchorLink>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <Container>
          <Row className="mb-4">
            <Col sm>
              <h3 className="text-center mt-3 mb-3">About Me</h3>
              <Container>
                <Row>
                  <Col md={8} className="order-2 order-sm-12">
                    <p>
                      I am a full stack developer who has high ambition to learn
                      new things and to constantly improve myself. I specialize
                      in back-end development with experience with development
                      in front-end as well using React. With various experiences
                      under my belt, I can adapt to any working environment as
                      ease.
                    </p>
                    <br />
                    <p>
                      I also have a certification in AWS Solutions Architect
                      Associate that was completed in July 2020.
                    </p>

                    <p className="mt-4">
                      <a href={RESUME_LINK}>
                        Download Resume
                      </a>
                    </p>
                  </Col>
                  <Col md={4} className="order-1 order-sm-1 text-center">
                    <Image
                      src={require('../../assets/profile.jpeg')}
                      className="profilePic mb-3"
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col sm className="item">
              <section id="tech">
                <h3 className="text-center mt-3 mb-3">Web Techologies I Use</h3>
                <div className="text-center mb-3">
                  <Image
                    src={require('../../assets/icons/html5.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/css-3.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/javascript.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/node-dot-js.svg')}
                    className="icon"
                  />

                  <Image
                    src={require('../../assets/icons/react.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/angular.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/vue-dot-js.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/redux.svg')}
                    className="icon"
                  />
                </div>
                <h3 className="text-center mt-3 mb-3">
                  Other Technologies I Use
                </h3>
                <div className="text-center mb-3">
                  <Image
                    src={require('../../assets/icons/java.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/python.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/elasticsearch.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/mysql.svg')}
                    className="icon"
                  />

                  <Image
                    src={require('../../assets/icons/firebase.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/amazonaws.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/github.svg')}
                    className="icon"
                  />
                  <Image
                    src={require('../../assets/icons/git.svg')}
                    className="icon"
                  />
                </div>
              </section>
            </Col>
          </Row>

          <div className="mb-5 item pt-3 pl-4">
            <h3 className="mt-3 mb-3">Portfolio</h3>

            <div>
              <Row>
                <Col>
                  <Card
                    title="Memory Game"
                    imageName="memorygame.jpeg"
                    to="./portfolio/memorygame"
                    description="HTML5 Canvas + JavaScript + Nodejs + SQL"
                  />
                </Col>
                <Col>
                  <Card
                    title="Multiplayer Mahjong"
                    imageName="mahjong.jpeg"
                    to="./portfolio/mahjong"
                    description="AWS Serverless + React TypeScript + WebSocket + PixiJS"
                  />
                </Col>
                <Col>
                  <Card
                    title="Big Two"
                    imageName="bigtwo.jpeg"
                    to="./portfolio/bigtwo"
                    description="React + NextJS + Socket.io + PixiJS"
                  />
                </Col>
              </Row>
              <div className="pb-3">
                <Link to="./portfolio">
                  <p>See more...</p>
                </Link>
              </div>

            </div>

          </div>
          {/* <Row className="mb-4">
            <Col sm className="item">
              <section id="interests">
                <h3 className="text-center mt-3 mb-3">Interests</h3>

                <h4>Music</h4>
                <p className="mb-3">
                  I have played piano for many years ever since I was a child
                  and will continue to do so for many decades to come. Classical
                  has always stuck to me, though I have played some pop music as
                  well. You can find my old content on my
                  {' '}
                  <a href="https://www.youtube.com/user/YummyBlaCha/">
                    YouTube channel
                  </a>
                  .
                </p>

                <h4>Chess</h4>
                <p className="mb-3">
                  Chess has been a hobby of mine in the past few years as I like
                  to keep my brain sharp and analytical. My main platform to
                  play is Lichess.org and you can find my profiles here.
                  <a href="https://lichess.org/@/yummyblabla">[1]</a>
                  <a href="https://lichess.org/@/wolfsheep">[2]</a>
                </p>

                <h4>Gaming</h4>
                <p className="mb-3">
                  I am also an avid gamer. As of now, I mainly play on my
                  Nintendo Switch console. However, my favourite game genre
                  would be real time strategy, especially games on the PC like
                  Starcraft, Warcraft, and Age of Empires.
                </p>
              </section>
            </Col>
          </Row> */}
        </Container>
      </section>
    </>
  );
}
