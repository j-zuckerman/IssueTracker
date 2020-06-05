import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Project = ({ data }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="mt-3 mr-3 mb-3">
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>{data.description}</Card.Text>
          <Link to={`/project/detail/${data.id}`}>Project Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
};
