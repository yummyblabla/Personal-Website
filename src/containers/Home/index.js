import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
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
            <h2 className="color-white">
              <Typist>
                <Typist.Delay ms={1500} />
                Derrick Lee
              </Typist>
            </h2>
            <h4 className="color-white">
              <Typist>
                <Typist.Delay ms={3500} />
                Full Stack Developer
              </Typist>
            </h4>
            <h5 className="color-white">
              <Typist>
                <Typist.Delay ms={5500} />
                Based in Vancity🍁
              </Typist>
            </h5>
            <div className="mt-5">
              <AnchorLink href="#portfolio">
                <Button variant="primary" className="mr-2 introButton">
                  See Portfolio
                </Button>
              </AnchorLink>

              <AnchorLink href="#about">
                <Button
                  variant="outline-primary"
                  className="introOutlineButton"
                >
                  About Me
                </Button>
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
                      Nice to meet you, I am Derrick 🙋‍♂️. I am a Full Stack Developer with 2+ years
                      of working experience, specializing in backend infrastructure. Having
                      first hand experience in designing, developing, and implementing solutions
                      for various applications, led me to become a holistic systems thinker.
                      <br />
                      <br />
                      Using a wide range of technologies and programming languages like Node.js,
                      Python, as well as, AWS motivates me to learn new things and
                      constantly improve myself.
                      <br />
                      <br />
                      Having graduated from BCIT Computer Systems Technology, and UBC Bachelor
                      of Science, grew my passion in software development. I strive to
                      innovate on solutions that simplifies everyday human problems.
                      <br />
                      <br />
                      I have a certification in
                      {' '}
                      <a href="https://www.credly.com/badges/21208b92-4684-4281-a750-fce3246edcea" className="colorPrimary textUnderline">AWS Solutions Architect Associate</a>
                      , and am currently a candidate for AWS Architecture Professional; to be completed by March of 2022.
                    </p>
                    <br />
                    <a href={RESUME_LINK}>
                      <Button variant="primary" className="mt-4 newButton">
                        Download Resume
                      </Button>
                    </a>
                  </Col>
                  <Col md={4} className="order-1 order-sm-1 text-center">
                    <Image
                      src={require('../../assets/newprofile.jpg')}
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
                    className="icon iconOverlay"
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

          <div className="mb-5 item pt-3">
            <section id="portfolio">
              <h3 className="mt-3 mb-3 pl-4">Portfolio</h3>

              <div>
                <Row className="d-flex flex-row pl-3 pr-3">
                  <Card
                    title="Yalty Software User Management"
                    imageName="yalty1.jpg"
                    to="./portfolio/yalty"
                    description="AWS Serverless + React + CICD"
                  />
                  <Card
                    title="Bike2Go"
                    imageName="bike2go.jpg"
                    to="./portfolio/bike2go"
                    description="React + NextJS"
                  />
                  <Card
                    title="Disaster Pets Rework"
                    imageName="disasterpets.jpeg"
                    to="./portfolio/disasterpets"
                    description="React + Firebase + Google Cloud Platform"
                  />
                </Row>
                <Link to="./portfolio">
                  <Button variant="primary" className="mb-3 newButton ml-4">
                    See more...
                  </Button>
                </Link>
              </div>
            </section>
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
