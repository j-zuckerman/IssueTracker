import React, { useEffect, useState, useContext } from 'react';
import { Issue } from './Issue';
import { ProjectContext } from '../../context';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './issues.css';
import { Progress } from './ProgressBar';

export const Issues = ({ projectId }) => {
  const { addIssue, issues, fetchIssues } = useContext(ProjectContext);
  const [show, setShow] = useState(false);

  const [issueName, setIssueName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const [status, setStatus] = useState('open');

  const handleName = (e) => {
    setIssueName(e.target.value);
  };
  const handleDescription = (e) => {
    setIssueDescription(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (id) => {
    const dataToSend = {
      name: issueName,
      description: issueDescription,
      status,
      projectId: id,
    };

    addIssue(dataToSend);
    handleClose();
  };

  const handleOptionChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    fetchIssues(projectId);
  }, []);

  return (
    <>
      <Progress data={issues}></Progress>
      <Button className="addButton" onClick={handleShow}>
        Add Issue
      </Button>
      <div className="issueContainer">
        <div className="issueGroup mt-3 mr-3 mb-3">
          <div className="statusLabel">
            <h3 className="statusText">Open</h3>
          </div>

          {issues
            .filter((issue) => issue.status === 'open')
            .map((issue) => (
              <Issue data={issue}></Issue>
            ))}
        </div>

        <div className="issueGroup mt-3 mr-3 mb-3">
          <div className="statusLabel">
            <h3 className="statusText">In Progress </h3>
          </div>

          {issues
            .filter((issue) => issue.status === 'inProgress')
            .map((issue) => (
              <Issue data={issue}></Issue>
            ))}
        </div>

        <div className="issueGroup mt-3 mr-3 mb-3">
          <div className="statusLabel">
            <h3 className="statusText">Closed </h3>
          </div>

          {issues
            .filter((issue) => issue.status === 'closed')
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
                <Form.Control
                  type="text"
                  placeholder="Enter issue name"
                  value={issueName}
                  onChange={handleName}
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Issue Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={issueDescription}
                  onChange={handleDescription}
                />
              </Form.Group>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="open"
                    checked={status === 'open'}
                    onChange={handleOptionChange}
                  />
                  Open
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="inProgress"
                    checked={status === 'inProgress'}
                    onChange={handleOptionChange}
                  />
                  In Progress
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="closed"
                    checked={status === 'closed'}
                    onChange={handleOptionChange}
                  />
                  Closed
                </label>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleSubmit(projectId)}>
              Add Issue
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
