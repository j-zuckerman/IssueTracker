import React, { useEffect, useState } from 'react';
import { Issue } from './Issue';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './issues.css';

const issues = [
  {
    title: 'issue1',
    status: 'open',
  },
  {
    title: 'issue4',
    status: 'open',
  },
  {
    title: 'issue2',
    status: 'inProgress',
  },
  {
    title: 'issue3',
    status: 'finished',
  },
];
export const Issues = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Add Issue</Button>
      <div className="issueContainer">
        <div className="issueGroup">
          <h3>Open </h3>

          {issues
            .filter((issue) => issue.status === 'open')
            .map((issue) => (
              <Issue data={issue}></Issue>
            ))}
        </div>

        <div className="issueGroup">
          <h3>In Progress </h3>

          {issues
            .filter((issue) => issue.status === 'inProgress')
            .map((issue) => (
              <Issue data={issue}></Issue>
            ))}
        </div>

        <div className="issueGroup">
          <h3>Finished </h3>

          {issues
            .filter((issue) => issue.status === 'finished')
            .map((issue) => (
              <Issue data={issue}></Issue>
            ))}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {' '}
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Issue Name</Form.Label>
                <Form.Control type="text" placeholder="Enter issue name" />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Issue
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
