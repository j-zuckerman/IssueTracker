import React, { useEffect, useContext } from 'react';

import Button from 'react-bootstrap/Button';

import { Issues } from '../issues';
import { ProjectContext } from '../../context';

const id = 1;
export const ProjectDetails = (props) => {
  const { project, fetchProject } = useContext(ProjectContext);

  useEffect(() => {
    fetchProject(props.match.params.id);
  }, []);

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>

      <Issues projectId={props.match.params.id}></Issues>
    </div>
  );
};
