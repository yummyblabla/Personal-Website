import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

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
                <Button variant="outline-primary">
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
                    <p>I am currently a BCIT CST student looking to make my first mark in the developing world. With the skills and experience I have gained from collaborative projects and hands-on learning, I am motivated to learn more and improve myself to make a contribution to the world.</p>
                  </Col>
                  <Col md={4} className="order-1 order-sm-1 text-center">
                    <Image src={require('./../../assets/profile.jpeg')} className="profilePic mb-3" roundedCircle />
                  </Col>
                </Row>
              </Container>
            </Col>

          </Row>
          <Row>
            <Col sm className="item">
              <section id="tech">
                <h3 className="text-center mt-3 mb-3">Web Techologies I Use</h3>
                <div className="text-center mb-3">
                  <Image src={require('./../../assets/icons/html5.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/css-3.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/javascript.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/node-dot-js.svg')} className="icon" />

                  <Image src={require('./../../assets/icons/react.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/angular.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/vue-dot-js.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/redux.svg')} className="icon" />

                </div>
                <h3 className="text-center mt-3 mb-3">Other Technologies I Use</h3>
                <div className="text-center mb-3">
                  <Image src={require('./../../assets/icons/java.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/python.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/elasticsearch.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/mysql.svg')} className="icon" />

                  <Image src={require('./../../assets/icons/firebase.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/amazonaws.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/github.svg')} className="icon" />
                  <Image src={require('./../../assets/icons/git.svg')} className="icon" />
                </div>
              </section>
            </Col>

            <Col sm className="item">
              <section id="experience">
                <h3 className="text-center mt-3 mb-3">Work Experience</h3>

                <h4 className="">Junior Software Developer</h4>
                <span className="subheading">
                  Reva Solutions | May 2019 - December 2019
                </span>
                <ul className="mb-3">
                  <li>Designed and built a full stack web application using React.js, Node.js and Elastic Search</li>
                  <li>Implemented new features and improvements in an engaging fashion</li>
                  <li>Demonstrated attention to detail and applied best practices in code</li>
                </ul>

                <h4>Quality Control Chemist</h4>
                <span className="subheading">
                  Viva Pharmaceuticals | August 2015 - July 2018
                </span>
                <ul className="mb-3">
                  <li>Developed and maintained data reporting system using Microsoft Excel and VBA</li>
                  <li>Demonstrated leadership and responsibility over OHS and safety aspects of the laboratory</li>
                </ul>

                <h4>Research Assistant</h4>
                <span className="subheading">
                  Taiheiyo Cement Corp. | May 2013 - March 2014
                </span>
                <ul className="mb-3">
                  <li>Utilized software macro language for data analysis automation of thousands of files</li>
                  <li>Coordinated with planning of experiments that progressed cement research in Japan</li>
                </ul>
              </section>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col sm className="item">
              <section id="education">
                <h3 className="text-center mt-3 mb-3">Education</h3>

                <h4>British Columbia Institute of Technology</h4>
                <div className="subheading mb-3">Diploma, Computer Systems Technology</div>
                <p>Specialization: Cloud Computing</p>
                <p className="mb-3">September 2018 - Present</p>

                <h4>University of British Columbia</h4>
                <div className="subheading mb-3">Bachelor of Science</div>
                <p>Specializations: Mathematics, Chemistry, Life Sciences</p>
                <p className="mb-3">Completed April 2015</p>
              </section>
            </Col>
            <Col sm className="item">
              <section id="interests">
                <h3 className="text-center mt-3 mb-3">Interests</h3>

                <h4>Music</h4>
                <p className="mb-3">I have played piano for many years ever since I was a child and will continue to do so for many decades to come. Classical has always stuck to me, though I have played some pop music as well. You can find my old content on my <a href="https://www.youtube.com/user/YummyBlaCha/">YouTube channel</a>.</p>

                <h4>Chess</h4>
                <p className="mb-3">Chess has been a hobby of mine in the past few years as I like to keep my brain sharp and analytical. My main platform to play is Lichess.org and you can find my profiles here. <a href="https://lichess.org/@/yummyblabla">[1]</a> <a href="https://lichess.org/@/wolfsheep">[2]</a></p>

                <h4>Gaming</h4>
                <p className="mb-3">I am also an avid gamer. As of now, I mainly play on my Nintendo Switch console.  However, my favourite game genre would be real time strategy, especially games on the PC like Starcraft, Warcraft, and Age of Empires.</p>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
