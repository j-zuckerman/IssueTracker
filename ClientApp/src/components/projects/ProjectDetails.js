import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import { Issues } from '../issues';

const id = 1;
export const ProjectDetails = () => {
  return (
    <div>
      <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>
      <Link to={`/project/edit/${id}`}>Edit Project</Link>
      <Issues></Issues>
    </div>
  );
};
