import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function CardComponent({
  imageName, to, title, description,
}) {
  return (
    <Card className="mb-3 mx-auto">
      <Link to={to}>
        <div className="preImage">
          <Card.Img src={require(`../../assets/portfolio/${imageName}`)} className="cardImage" />
        </div>
      </Link>
      <Card.Body>
        <Card.Title><h4>{title}</h4></Card.Title>
        <Card.Text style={{ textAlign: 'center' }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
