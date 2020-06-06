import React, { useEffect, useState, useContext } from 'react';
import { Issue } from './Issue';
import { ProjectContext } from '../../context';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './issues.css';

// const issues = [
//   {
//     title: 'issue1',
//     status: 'open',
//   },
//   {
//     title: 'issue4',
//     status: 'open',
//   },
//   {
//     title: 'issue2',
//     status: 'inProgress',
//   },
//   {
//     title: 'issue3',
//     status: 'finished',
//   },
// ];
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
