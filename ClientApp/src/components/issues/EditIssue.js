import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

export const EditIssue = () => {
  return (
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Issue Name</Form.Label>
        <Form.Control type="text" placeholder="Enter issue name" />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
