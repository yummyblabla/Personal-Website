import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Yalty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container className="fixFooter">
      <Row>
        <Col sm className="mt-5 p-4 text-center">
          <Image src={require('./../../../assets/mockups/yalty.png')} className="mobileImage" style={{ width: 400 }} />
        </Col>

        <Col sm className="mt-5">
          <h2>Yalty Software User Management</h2>
          <h4>Full Stack Development with CI-CD</h4>

          <p className="date py-2">
            <b className="mr-5">Date</b>
            April - May 2020
          </p>
          <div className="techstack d-flex py-2 mb-4">
            <p className="mr-5"><b>Tech Stack</b></p>
            <Image src={require('./../../../assets/icons/amazonaws.svg')} className="techstackimage" />
            <Image src={require('./../../../assets/icons/react.svg')} className="techstackimage" />
            <Image src={require('./../../../assets/icons/terraform.svg')} className="techstackimage" />
          </div>

          <p className="mb-3">For my projects practicum course (COMP 3800) at BCIT, my team of five and I were tasked to create a user management system in 5 weeks using agile methodologies. Some hard requirements were AWS, serverless and Terraform, and it also needs a user interface to perform CRUD operations on users.</p>
          <p className="mb-3">Because it was serverless, we used DynamoDB, API Gateway, Lambda, and Cognito for the backend resources. S3, and CloudFront were resources to host our React application. Terraform along with AWS CodePipeline were used for managing our resources and CICD.</p>
          <p className="mb-3">We worked closely with our supervisor to stay on task and meet the goals of our sprint. I acted as a team lead to communicate our progress to the project stakeholders and to ensure that we complete our deliverables by the project deadline. </p>
          <p className="mb-3">Overall, everybody on the team learned a lot about AWS, and this prompted the whole team to complete the certification for AWS Solutions Architect Associate, which we all passed.</p>
          <div className="mb-3">
            <a href="https://user.yalty.mobi/">
              <Button variant="outline-primary">
                Link
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
