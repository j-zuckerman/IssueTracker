import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../context';

export const Project = ({ data }) => {
  const { deleteProject } = useContext(ProjectContext);

  const handleDelete = (id) => {
    deleteProject(id);
  };

  return (
    <div>
      <Card style={{ width: '22rem' }} className="mt-3 mr-3 mb-3">
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.description}
          </Card.Subtitle>

          <Link to={`/project/detail/${data.id}`}>View Issues</Link>

          <Button
            className="ml-3"
            variant="danger"
            onClick={() => handleDelete(data.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
