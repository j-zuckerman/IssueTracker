import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProjectContext } from '../../context';

export const Issue = ({ data }) => {
  const { deleteIssue } = useContext(ProjectContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    deleteIssue(id);
  };

  return (
    <div>
      <Card style={{ width: '100%' }} className="mt-4 mb-4 mr-4">
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.description}
          </Card.Subtitle>
          <Card.Text></Card.Text>
          <Button className="mr-3" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDelete(data.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Issue Name</Form.Label>
              <Form.Control type="text" placeholder="Enter issue name" />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Issue Description</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Edit Issue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
