import React, { useEffect } from 'react';
import { Project } from './Project';
import Button from 'react-bootstrap/Button';

export const Projects = () => {
  return (
    <div>
      <Button variant="primary">Add Project</Button>
      <Project></Project>
    </div>
  );
};
