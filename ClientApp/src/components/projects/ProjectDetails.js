import React, { useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
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
      <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>
      <Link to={`/project/edit/${id}`}>Edit Project</Link>
      <Issues projectId={props.match.params.id}></Issues>
    </div>
  );
};
