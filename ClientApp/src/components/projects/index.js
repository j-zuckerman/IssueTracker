import React, { useEffect, useState } from 'react';
import { Project } from './Project';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './projects.css';

const projects = [
  {
    title: 'project1',
    description: 'blah blah',
    id: 1,
  },
  {
    title: 'project2',
    description: 'blah blah',
    id: 2,
  },
  {
    title: 'project3',
    description: 'blah blah',
    id: 3,
  },
];
export const Projects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>
      <div className="projectsGroup">
        {projects.map((project) => (
          <Project data={project}></Project>
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" placeholder="Enter project name" />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Project Description</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
